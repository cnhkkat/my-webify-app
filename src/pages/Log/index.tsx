import { useRequest } from 'ahooks';
import React from 'react';

import Layout from '@/features/Layout';
import { DB } from '@/utils/api/dbConfig';
import { getOrderData } from '@/utils/api/getOrderData';
import { staleTime } from '@/utils/constants';

import { Title } from '../titleConfig';
import TimeItem from './TimeItem';

interface Log {
  _id: string;
  date: number;
  logContent: string;
}

const Log: React.FC = () => {
  const { data, loading } = useRequest(getOrderData, {
    defaultParams: [{ dbName: DB.Log, sortKey: 'date' }],
    retryCount: 3,
    cacheKey: `Log-${DB.Log}`,
    staleTime
  });
console.log(data);

  return (
    <Layout title={Title.Log} loading={loading}>
      {data?.data.map(({ _id, date, logContent }: Log) => (
        <TimeItem key={_id} date={date} logContent={logContent} _id={_id}/>
      ))}
    </Layout>
  );
};

export default Log;
