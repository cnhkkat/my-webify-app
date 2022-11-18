import React from 'react';

import Comment from '@/features/Comment';
import Layout from '@/features/Layout';

import { Title } from '../titleConfig';
import MsgInfo from './MsgInfo';

const Msg: React.FC = () => {
  return (
    <Layout title={Title.Msg}>
      <MsgInfo />
      <Comment titleEng='' autoScroll={true} scrollToTop={440 + 370} title='留言区' />
    </Layout>
  );
};

export default Msg;
