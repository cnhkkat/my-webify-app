import React from 'react';
import { useNavigate } from 'react-router-dom';

import s from './index.scss';

interface Props {
  cover?: string;
  title?: string;
  desc?: string;
}

const ImgCard: React.FC<Props> = ({ cover, title, desc }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundImage: `url(${cover})` }}
      onClick={() => navigate(`/img?title=${encodeURIComponent(title!)}`)}
      className={s.imgItem}
    >
      <div className={s.title}>{title}</div>
      <div className={s.descr}>{desc}</div>
      <div className={s.mask} />
    </div>
  );
};

export default ImgCard;
