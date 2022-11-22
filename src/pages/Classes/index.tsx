import { useRequest } from 'ahooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '@/features/Layout';
import { DB } from '@/utils/api/dbConfig';
import { getData } from '@/utils/api/getData';
import { staleTime } from '@/utils/constants';

import { Title } from '../titleConfig';
import ClassBar from './ClassBar';
import s from './index.scss';

interface ClassType {
  _id: string;
  class: string;
  count: number;
}

const Classes: React.FC = () => {
  const navigate = useNavigate();

  const { data, loading } = useRequest(getData, {
    defaultParams: [DB.Class],
    retryCount: 3,
    cacheKey: `Classes-${DB.Class}`,
    staleTime
  });

  return (
    <Layout title={Title.Classes} loading={loading} className={s.classBox} rows={8}>
      {data?.data.map((item: ClassType) => (
        <ClassBar
          className={s.classItem}
          key={item._id}
          content={item.class}
          num={item.count}
          onClick={() => navigate(`/artDetail?class=${encodeURIComponent(item.class)}`)}
        />
      ))}
    </Layout>
  );
};

export default Classes;
