import './index.custom.scss';

import { VerticalAlignTopOutlined } from '@ant-design/icons';
import { BackTop } from 'antd';
import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { backTopReducer } from '../../store/backTopSlice';

import s from './index.scss';

const BackToTop: React.FC = () => {
  const dispatch = useAppDispatch()
  const backTop = () => {
    dispatch(backTopReducer(true))
  };

  return (
    <BackTop duration={700} visibilityHeight={300} onClick={backTop} className='BackTop'>
      <div className={s.backTop}>
        <VerticalAlignTopOutlined />
      </div>
    </BackTop>
  );
};

export default BackToTop
