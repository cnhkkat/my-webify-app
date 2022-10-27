import React from 'react';
import Card from '../../../../features/Card';
import { welcomeCardAvatar } from '../../../../utils/constants';
import { useTime } from '../../../../utils/hooks/useTime';
import s from './index.scss';

const WelcomeCard: React.FC  = ()=> {
  const { timeText } = useTime();
  return (
    <Card className={s.card}>
      <p className={s.text}>
        {timeText}<br />
        我是<span className={s.color}>木桐</span><br />
        欢迎来到
        <br />
        我的<span className={s.color}>个人博客</span>
      </p>
      <img alt='avatar' src={welcomeCardAvatar} className={s.avatar} />
    </Card>
  )
}
export default WelcomeCard