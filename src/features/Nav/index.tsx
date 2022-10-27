import './index.custom.scss'
import React from 'react';
import classNames from 'classnames';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectNavShow,setNavShow } from '../../store/navSlice';
import s from './index.scss';

import {
  BgColorsOutlined,
  CheckOutlined,
  HomeOutlined,
  MenuOutlined,
  SettingOutlined
} from '@ant-design/icons';

import {
  useEventListener,
  useLocalStorageState,
  useSafeState,
  useUpdateEffect
} from 'ahooks';
import { Drawer } from 'antd';

import { NavLink, useNavigate } from 'react-router-dom';
import { linkList } from './linkList';

const Nav = ()=>{

  const navShow = useAppSelector(selectNavShow);
  
  const dispatch = useAppDispatch();

  const { navArr, secondNavArr } = linkList();
  const navigate = useNavigate(); 

  useEventListener(
    'mousewheel',
    event => {
      event = event || window.event;
      dispatch(setNavShow!(event.wheelDeltaY > 0))
    },
    { target: document.body }
  );

  return (
    <>
      <nav className={classNames(s.nav, { [s.hiddenNav]: !navShow })}>
        <div className={s.navContent}>
          {/* 主页 */}
          <div className={s.homeBtn} onClick={() => navigate('/')}>
            <HomeOutlined />
          </div>

          {/* 后台管理 */}
          {/* <a className={s.adminBtn} href={blogAdminUrl} target='_blank' rel='noreferrer'>
            <SettingOutlined />
          </a> */}

          {/* 黑暗模式切换 */}
          {/* <div className={s.modeBtn}>
            <BgColorsOutlined />
            <div className={s.modeOpions}>
              {modeOptions.map((backgroundColor, index) => (
                <div
                  key={index}
                  style={{ backgroundColor }}
                  className={classNames(s.modeItem, s[`modeItem${index}`])}
                  onClick={() => setMode?.(index)}
                >
                  <CheckOutlined style={{ display: mode === index ? 'block' : 'none' }} />
                </div>
              ))}
            </div>
          </div> */}

          {/* 文章单独按钮 */}
          <div className={s.articlesBtn}>
            <div className={s.articelsSecond}>
              {secondNavArr.map((item, index) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? s.sedActive : s.articelsSecondItem
                  }
                  to={item.to}
                  key={index}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            文章
          </div>

          {/* 其他按钮 */}
          {navArr.map((item, index) => (
            <NavLink
              className={({ isActive }) => (isActive ? s.navActive : s.navBtn)}
              to={item.to}
              key={index}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  )
}
export default Nav