import { useRequest } from 'ahooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@/features/Card';
import { DB } from '@/utils/api/dbConfig';
import { staleTime } from '@/utils/constants';
import { fetchData } from './fetchData';
import s from './index.scss';
import { artSumReducer } from '@/store/artSumSlice';
import { useAppDispatch } from '@/app/hooks';

const DataCard: React.FC = () => {
  const navigate = useNavigate();
  
  const dispatch = useAppDispatch()
  const { data, loading } = useRequest(fetchData, {
    retryCount: 3,
    cacheKey: `DataCard-count-${DB.Article}-${DB.Class}-${DB.Tag}`,
    staleTime,
    onSuccess: data => dispatch(artSumReducer!(data?.articles.total))
  });

  return (
    <Card className={s.card} loading={loading}>
      <div className={s.blogData} onClick={() => navigate('/articles')}>
        <div className={s.name}>文章</div>
        <div className={s.num}>{data?.articles.total}</div>
      </div>
      <div className={s.blogData} onClick={() => navigate('/classes')}>
        <div className={s.name}>分类</div>
        <div className={s.num}>{data?.classes.total}</div>
      </div>
      <div className={s.blogData} onClick={() => navigate('/tags')}>
        <div className={s.name}>标签</div>
        <div className={s.num}>{data?.tags.total}</div>
      </div>
    </Card>
  );
};

export default DataCard
