import { useRequest } from 'ahooks'
import React from 'react'

import Layout from '@/features/Layout'
import { DB } from '@/utils/api/dbConfig'
import { getOrderData } from '@/utils/api/getOrderData'
import { staleTime } from '@/utils/constants'

import { Title } from '../titleConfig'
import SayPop from './SayPop'

interface SayType {
  _id: string;
  content: string;
  date: number;
}

const Say: React.FC = () => {
  const { data, loading } = useRequest(getOrderData, {
    defaultParams: [{ dbName: DB.Say, sortKey: 'date' }],
    retryCount: 3,
    cacheKey: `Say-${DB.Say}`,
    staleTime
  })

  return (
    <Layout title={Title.Say} loading={loading}>
      {data?.data.map(({ _id, content, date }: SayType) => (
        <SayPop key={_id} content={content} date={date} />
      ))}
    </Layout>
  )
}

export default Say
