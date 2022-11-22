import { useRequest } from 'ahooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '@/features/Layout';
import { DB } from '@/utils/api/dbConfig';
import { getData } from '@/utils/api/getData';
import { staleTime } from '@/utils/constants';

import { Title } from '../titleConfig';
import s from './index.scss';

interface TagType {
  _id: string;
  _openid: string;
  tag: string;
}

const Tags: React.FC = () => {
  const navigate = useNavigate();

  const { data, loading } = useRequest(getData, {
    defaultParams: [DB.Tag],
    retryCount: 3,
    cacheKey: `Tags-${DB.Tag}`,
    staleTime
  });

  return (
    <Layout title={Title.Tags} loading={loading} className={s.tagsBox} rows={3}>
      {data?.data.map((item: TagType) => (
        <span
          className={s.tagItem}
          key={item._id}
          onClick={() => navigate(`/artDetail?tag=${encodeURIComponent(item.tag)}`)}
        >
          {item.tag}
        </span>
      ))}
    </Layout>
  );
};

export default Tags;
