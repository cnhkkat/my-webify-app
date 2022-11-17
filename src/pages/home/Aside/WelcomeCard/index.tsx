import React from 'react';

import Card from '@/features/Card';
import { welcomeCardAvatar } from '@/utils/constants';
import { useTime } from '@/utils/hooks/useTime';

import s from './index.scss';

const BlogCard: React.FC = () => {
  const { timeText } = useTime();

  return (
    <Card className={s.card}>
      <p className={s.text}>
        {timeText}<br />
        我叫<span className={s.color}>kkat</span> 在这里<br />
        分享学习笔记
        <br />
        <span className={s.color}>保持强力</span><br />
        <span className={s.color}>给你氧气</span>
      </p>
      <img src={welcomeCardAvatar} className={s.avatar} />
    </Card>
  );
};

export default BlogCard;
