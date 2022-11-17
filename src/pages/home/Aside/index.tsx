import React from 'react';

import AccountCard from './AccountCard';
import WelcomeCard from './WelcomeCard'
import DataCard from './DataCard';
import SiteCard from './SiteCard';
import TagCard from './TagCard';
import s from './index.scss';
const Aside: React.FC = () => {
  return (
    <aside className={s.aside}>
      <WelcomeCard />
      <AccountCard />
      <DataCard />
      <div className={s.cardSticky}>
        <TagCard />
        <SiteCard />
      </div>
    </aside>
  );
};

export default Aside;
