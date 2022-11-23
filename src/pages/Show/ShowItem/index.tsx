import React from 'react';

import s from './index.scss';

interface Props {
  cover?: string;
  link?: string;
  name?: string;
  desc?: string;
}

const ShowItem: React.FC<Props> = ({ cover, link, name, desc }) => {
  return (
    <div style={{ backgroundImage: `url(${cover})` }} className={s.showItem}>
      <a href={link} rel='noreferrer' target='_blank' className={s.link}>
        <div className={s.title}>
          <span>{name}</span>
        </div>
        <div className={s.descr}>{desc}</div>
        <div className={s.mask} />
      </a>
    </div>
  );
};

export default ShowItem;
