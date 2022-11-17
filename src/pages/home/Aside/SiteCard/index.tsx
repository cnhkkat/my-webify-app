import { useRequest } from 'ahooks';
import React from 'react';

import Card from '@/features/Card';
import { DB } from '@/utils/api/dbConfig';
import { getSiteCount } from '@/utils/api/getSiteCount';
import { siteCountStale } from '@/utils/constants';

import s from './index.scss';
import { useRunTime } from './useRunTime';

const SiteCard: React.FC = () => {
  const { runTime } = useRunTime();

  const { data, loading } = useRequest(getSiteCount, {
    retryCount: 3,
    cacheKey: `SiteCard-${DB.Count}`,
    staleTime: siteCountStale
  });

  return (
    <Card className={s.card} loading={loading}>
      <div className={s.item}>
        <span className={s.key}>总浏览量</span>
        <span className={s.value}>{data?.data[0].count}次</span>
      </div>
      <div className={s.item}>
        <span className={s.key}>运行时间</span>
        <span className={s.value}>{runTime}天</span>
      </div>
    </Card>
  );
};

export default SiteCard;
