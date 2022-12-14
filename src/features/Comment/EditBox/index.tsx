import useUrlState from '@ahooksjs/use-url-state';
import { UserOutlined } from '@ant-design/icons';
import {
  useBoolean,
  useKeyPress,
  useLocalStorageState,
  useMemoizedFn,
  useMount,
  useRequest,
  useSafeState
} from 'ahooks';
import { message } from 'antd';
import classNames from 'classnames';
import React, { useRef } from 'react';
import { useAppDispatch,useAppSelector } from '@/app/hooks';
import sanitizeHtml from 'sanitize-html';

import { axiosAPI } from '@/utils/api/axios';
import { DB } from '@/utils/api/dbConfig';
import { setData } from '@/utils/api/setData';
import { auth } from '@/utils/cloudBase';
import {
  adminUid,
  avatarArrLen,
  defaultCommentAvatarArr,
  emailApi,
  myAvatar70,
  myEmail,
  myLink,
  myName,
  QQ
} from '@/utils/constants';
import { getRandomNum } from '@/utils/function';

import AdminBox from './AdminBox';
import Emoji from './Emoji';
import s from './index.scss';
import PreShow from './PreShow';
import { nameReducer } from '@/store/nameSlice'
import  { avatarReducer } from '@/store/avatarSlice'
import  { linkReducer } from '@/store/linkSlice'
import  { emailReducer } from '@/store/emailSlice'

interface Props {
  msgRun?: Function;
  replyRun?: Function;
  isReply?: boolean;
  closeReply?: Function;
  className?: string;
  replyName?: string;
  replyId?: string;
  title?: string;
  ownerEmail?: string;
}

const EditBox: React.FC<Props> = ({
  msgRun,
  replyRun,
  isReply = false,
  closeReply,
  replyName,
  replyId,
  className,
  title,
  ownerEmail
}) => {
  const avatar = useAppSelector(state => state.avatar.value)
  const name = useAppSelector(state => state.name.value)
  const link = useAppSelector(state => state.link.value)
  const email = useAppSelector(state => state.email.value)
  const dispatch = useAppDispatch()
  const [search] = useUrlState();

  const nameRef = useRef(null);

  const [showAdmin, setShowAdmin] = useSafeState(false);
  const [showPre, { toggle: togglePre, setFalse: closePre }] = useBoolean(false);

  const [text, setText] = useSafeState('');

  const [localName, setLocalName] = useLocalStorageState('name');
  const [localEmail, setLocalEmail] = useLocalStorageState('email');
  const [localLink, setLocalLink] = useLocalStorageState('link');
  const [localAvatar, setLocalAvatar] = useLocalStorageState('avatar');

  const validateConfig = {
    name: {
      check: /^[\u4e00-\u9fa5_a-zA-Z0-9]{2,8}$/,
      content: name,
      errText: '?????????????????????????????????????????????2~8???'
    },
    email: {
      check: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
      content: email,
      errText: '?????????????????????????????????'
    },
    link: {
      check: /^$|^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/,
      content: link,
      errText: '??????????????????url???????????????'
    },
    text: {
      check: /^[\s\S]*.*[^\s][\s\S]*$/,
      content: text,
      errText: '????????????????????????~'
    }
  };

  const validate = useMemoizedFn(() => {
    Object.keys(validateConfig).forEach(item => {
      const { check, errText, content } =
        validateConfig[item as keyof typeof validateConfig];
      if (!check.test(content!)) {
        message.error(errText);
        throw new Error('breakForEach');
      }
    });
  });

  const checkAdmin = useMemoizedFn(() => {
    if (
      !adminLogined() &&
      (name === myName ||
        name === QQ ||
        email === myEmail ||
        link?.indexOf(myLink) !== -1)
    ) {
      message.warning('????????????????????????????????????????????????????????????????????????~');
      throw new Error('Not Admin');
    }
  });

  const submit = useMemoizedFn(async () => {
    try {
      validate();
      checkAdmin();

      const config = {
        DBName: DB.Msg,
        name: sanitizeHtml(name!),
        email: sanitizeHtml(email!),
        link: sanitizeHtml(link!),
        content: sanitizeHtml(text),
        date: new Date().getTime(),
        avatar: avatar
          ? avatar
          : defaultCommentAvatarArr[getRandomNum(0, avatarArrLen - 1)],
        postTitle: search.title || '',
        replyId: replyId || ''
      };

      const isTrue = await setData(config);

      if (isTrue) {
        if (isReply) {
          closeReply?.();
          replyRun?.();
          email !== ownerEmail && informUser();
          informAdminReply();
        } else {
          msgRun?.();
          informAdminMsg();
        }
      } else {
        message.error('???????????????????????????');
      }
    } catch {}
  });

  const adminLogined = useMemoizedFn(() => {
    // auth.signInWithEmailAndPassword('1071541105@qq.com','aa098765').then(res=>console.log(res)
    // )
    // console.log(auth.currentUser?.uid);
    if (!auth.hasLoginState()) return false;
    if (auth.currentUser?.uid === adminUid) return true;
    return false;
  });

  useMount(() => {
    if (adminLogined()) {
      // ??????????????????
      dispatch(nameReducer?.(myName))
      dispatch(emailReducer?.(myEmail))
      dispatch(linkReducer?.(myLink))
      dispatch(avatarReducer?.(myAvatar70))
      return;
    }
    localName && localName !== myName && dispatch(nameReducer?.(localName))
    localEmail && localEmail !== myEmail && dispatch(emailReducer?.(localEmail))
    localLink && localLink && dispatch(linkReducer?.(localLink))
    localAvatar && dispatch(avatarReducer?.(localAvatar))
  });

  const handleName = useMemoizedFn(() => {
    const regQQ = /[1-9][0-9]{4,11}/;
    if (name === 'admin') {
      setShowAdmin(true);
      dispatch(nameReducer?.(''))
      return;
    }
    if (!adminLogined() && (name === myName || name === QQ)) {
      message.warning('??????????????????????????????????????????~');
       dispatch(nameReducer?.(''))
      return;
    }
    if (regQQ.test(name!)) {
      const avatarUrl = `https://q1.qlogo.cn/g?b=qq&nk=${name}&s=100`;
      const QQEmail = `${name}@qq.com`;
      dispatch(emailReducer?.(QQEmail))
      dispatch(avatarReducer?.(avatarUrl))
      setLocalEmail(QQEmail);
      setLocalAvatar(avatarUrl);
      dispatch(nameReducer?.(''))
      return;
    }
    setLocalName(name);
  });

  useKeyPress(13, handleName, {
    target: nameRef
  });

  const openPreShow = useMemoizedFn(() => {
    if (!showPre && !text) {
      message.info('????????????????????????~');
      return;
    }
    togglePre();
  });

  const handleCloseReply = useMemoizedFn(() => {
    closeReply?.();
  });

  const { run: informAdminMsg } = useRequest(
    () =>
      axiosAPI(emailApi, 'POST', {
        flag: 0,
        name,
        search: search.title || '',
        content: text,
        title
      }),
    {
      manual: true,
      onSuccess: () => {
        setText('');
        message.success(`??????${search.title ? '??????' : '??????'}?????????`);
      }
    }
  );

  const { run: informAdminReply } = useRequest(
    () =>
      axiosAPI(emailApi, 'POST', {
        flag: 1,
        owner: replyName,
        name,
        search: search.title || '',
        content: text,
        title
      }),
    {
      manual: true,
      onSuccess: () => {
        setText('');
        message.success('??????????????????');
      }
    }
  );

  const { run: informUser } = useRequest(
    () =>
      axiosAPI(emailApi, 'POST', {
        flag: 2,
        owner: replyName,
        email: ownerEmail,
        name,
        search: search.title || '',
        content: text,
        title
      }),
    {
      manual: true,
      onSuccess: () => {
        message.success(`?????????${search.title ? '??????' : '??????'}??????`);
      }
    }
  );

  return (
    <div className={classNames(s.editBox, className)}>
      {isReply && (
        <div className={s.replyNameBox}>
          ????????????<span>{replyName}</span>??????
        </div>
      )}
      <div className={s.flex}>
        <AdminBox
          showAdmin={showAdmin}
          setShowAdmin={setShowAdmin}
          setName={dispatch(nameReducer)}
          setEmail={dispatch(emailReducer)}
          setLink={dispatch(linkReducer)}
          setAvatar={dispatch(avatarReducer)}
        />

        <div className={s.avatarBoxCol}>
          <div className={s.avatarBox}>
            {avatar ? (
              <img src={avatar} className={s.editAvatar} />
            ) : (
              <UserOutlined className={s.noAvatar} />
            )}
          </div>
        </div>
        <div className={s.editInputBox}>
          <div className={s.inputBox}>
            <div className={classNames(s.inputInfo, s.flex2)}>
              <div className={s.inputKey}>??????</div>
              <input
                ref={nameRef}
                type='text'
                className={s.inputValue}
                placeholder='QQ???'
                value={name}
                onChange={e => dispatch(nameReducer?.(e.target.value))}
                onBlur={handleName}
              />
            </div>
            <div className={classNames(s.inputInfo, s.flex3)}>
              <div className={s.inputKey}>??????</div>
              <input
                type='text'
                className={s.inputValue}
                placeholder='??????'
                value={email}
                onChange={e => dispatch(emailReducer?.(e.target.value))}
                onBlur={e => setLocalEmail(e.target.value)}
              />
            </div>
            <div className={classNames(s.inputInfo, s.flex3)}>
              <div className={s.inputKey}>??????</div>
              <input
                type='text'
                className={s.inputValue}
                placeholder='??????'
                value={link}
                onChange={e => dispatch(linkReducer?.(e.target.value))}
                onBlur={e => setLocalLink(e.target.value)}
              />
            </div>
          </div>

          <div className={s.textareaBox}>
            <textarea
              className={s.textarea}
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder='??????markdown?????????&#10;??????????????????????????????QQ????????????????????????????????????QQ????????????'
            />
          </div>
          <div className={s.commentBtns}>
            <Emoji />
            {isReply && (
              <div className={s.cancelBtn} onClick={handleCloseReply}>
                ??????
              </div>
            )}
            <div className={s.previewBtn} onClick={openPreShow}>
              ??????
            </div>
            <div className={s.sendBtn} onClick={submit}>
              {isReply ? '??????' : ' ??????'}
            </div>
          </div>
        </div>
      </div>
      <PreShow
        closePre={closePre}
        content={text}
        className={classNames({ [s.preShowHidden]: !showPre })}
      />
    </div>
  );
};

export default EditBox;
