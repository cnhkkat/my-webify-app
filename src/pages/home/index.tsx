import React from 'react';
import { useMount, useSafeState, useTitle } from 'ahooks';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectNavShow,setNavShow } from '../../store/navSlice';

import s from './index.scss';
import useTop from '../../utils/hooks/useTop';
import { siteTitle,pageDesc } from '../../utils/constants';
import PageTitle from '../../features/PageTitle';
import Section from './Section';
import Aside from './Aside';

const Home = () => {
  useTitle(siteTitle);
  // const navShow = useAppSelector(selectNavShow);
  // const dispatch = useAppDispatch();

  // useTop(setNavShow)

  return (
    <>
      <PageTitle title={siteTitle} desc={pageDesc} className={s.homeTitle} />
      <div className={s.body}>
        {/* <Section /> */}
        <Aside />
      </div>
    </>
  )
}
export default Home