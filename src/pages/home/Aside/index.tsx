import React from 'react';
import s from './index.scss'
import WelcomeCard from './WelcomeCard';

const Aside:React.FC = () => {
  return (
    <aside className={s.aside} >
      <WelcomeCard />
    </aside>
  )
}
export default Aside