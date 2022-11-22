import dayjs from 'dayjs';
import React from 'react';
import s from './index.scss';
import MarkDown from '@/features/MarkDown'

interface Props {
  date: number;
  logContent: string;
  _id:string
}

const TimeItem: React.FC<Props> = ({ date, logContent,_id }) => {
  return (
    <div className={s.item}>
      <div className={s.time}>
        <div className={s.dot}>
          <div className={s.dotIn} />
        </div>
        {dayjs(date).format('YYYY-MM-DD')}
      </div>

      <ul className={s.content}>
          <li key={_id} className={s.timeLi}>
            <MarkDown content={logContent || ''} />
          </li>
      </ul>
    </div>
  );
};

export default TimeItem;
