import { useMount, useSafeState, useTitle } from 'ahooks';
import React from 'react';
import PageTitle from '@/features/PageTitle';

import { siteTitle,pageDesc } from '@/utils/constants';
import s from './index.scss';
import BackToTop from '@/features/BackToTop';
import Aside from './Aside';
import Section from './Section';
const Home: React.FC = () => {
  return (
    <>
      <PageTitle title={siteTitle} desc={pageDesc} className={s.homeTitle} />
      <div className={s.body}>
        <Section />
        <Aside />

      </div>
      <BackToTop />
    </>
  );
}
export default Home;