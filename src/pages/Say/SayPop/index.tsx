import dayjs from 'dayjs';
import React from 'react';

import { myAvatar70 } from '@/utils/constants';

import s from './index.scss';

interface Props {
  content?: string;
  date?: number;
}

const SayPop: React.FC<Props> = ({ content, date }) => (
  <div className={s.sayItem}>
    <div className={s.avatarBox}>
      <img src={myAvatar70} className={s.avatar} />
    </div>

    <div className={s.contentBox}>
      <div className={s.content}>
        {content}
        <span className={s.date}>{dayjs(date).format('YYYY-MM-DD HH:mm:ss')}</span>
      </div>
    </div>
  </div>
);

export default SayPop;
