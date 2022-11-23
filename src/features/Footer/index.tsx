import React from 'react';

import {icp_site,icp_no, source_github } from '@/utils/constants';

import s from './index.scss';

const Footer: React.FC = () => {
  // const frameArr = [
  //   'React',
  //   'React Router',
  //   'Redux',
  //   'Webpack',
  //   'AntD',
  //   'ahooks',
  //   'CloudBase'
  // ];

  return (
    <footer className={s.footer}>
      <span>
        <a href={source_github} target='_blank' rel='noreferrer' className={s.text}>
          个人博客源代码
        </a>
      </span>
      <span>
        <a href={icp_site} target='_blank' rel='noreferrer' className={s.text}>
          {icp_no}
        </a>
      </span>
      {/* <span>
        {frameArr.map((item, index) => (
          <span className={s.siteFrame} key={index}>
            {item}
          </span>
        ))}
      </span> */}
    </footer>
  );
};

export default Footer;
