import { useRequest } from 'ahooks';
import React from 'react';

import Layout from '@/features/Layout';
import { DB } from '@/utils/api/dbConfig';
import { getData } from '@/utils/api/getData';
import { staleTime } from '@/utils/constants';
import { shuffleArray } from '@/utils/function';

import { Title } from '../titleConfig';
import s from './index.scss';
import LinkItem from './LinkItem';

interface linkType {
  _id: string;
  link: string;
  avatar: string;
  name: string;
  desc: string;
}

const Link: React.FC = () => {
  const { data, loading } = useRequest(getData, {
    defaultParams: [DB.Link],
    retryCount: 3,
    cacheKey: `Link-${DB.Link}`,
    staleTime
  });

  return (
    <Layout title={Title.Link} loading={loading} className={s.box}>
      {shuffleArray(data?.data).map((item: linkType) => (
        <LinkItem
          key={item._id}
          link={item.link}
          avatar={item.avatar}
          name={item.name}
          desc={item.desc}
        />
      ))}
    </Layout>
  );
};

export default Link;
