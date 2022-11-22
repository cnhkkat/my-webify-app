import useUrlState from '@ahooksjs/use-url-state';
import { useRequest, useSafeState } from 'ahooks';
import dayjs from 'dayjs';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import DisplayBar from '@/features/DisplayBar';
import Layout from '@/features/Layout';
import MyPagination from '@/features/MyPagination';
import { DB } from '@/utils/api/dbConfig';
import { getWhereOrderPageSum } from '@/utils/api/getWhereOrderPageSum';
import { db } from '@/utils/cloudBase';
import { detailPostSize, staleTime } from '@/utils/constants';

interface ArticleType {
  _id: string;
  title: string;
  date: number;
  titleEng: string;
}


const ArtDetail: React.FC = () => {
  const [query] = useUrlState();
  const navigate = useNavigate();

  const [page, setPage] = useSafeState(1);

  const where = query.tag
    ? {
        tags: db.RegExp({
          regexp: `${query.tag}`,
          options: 'i'
        })
      }
    : {
        classes: query.class
      };

  const { data, loading } = useRequest(
    () =>
      getWhereOrderPageSum({
        dbName: DB.Article,
        where,
        page,
        size: detailPostSize,
        sortKey: 'date'
      }),
    {
      retryCount: 3,
      refreshDeps: [page],
      cacheKey: `ArtDetail-${DB.Article}-${JSON.stringify(where)}-${page}`,
      staleTime
    }
  );

  return (
    <Layout title={query.tag || query.class}>
      {data?.articles.data.map((item: ArticleType) => (
        <DisplayBar
          key={item._id}
          content={item.title}
          right={dayjs(item.date).format('YYYY-MM-DD')}
          loading={loading}
          onClick={() => navigate(`/post?title=${encodeURIComponent(item.titleEng)}`)}
        />
      ))}
      <MyPagination
        current={page}
        defaultPageSize={detailPostSize}
        total={data?.sum.total}
        setPage={setPage}
        autoScroll={true}
        scrollToTop={440}
      />
    </Layout>
  );
};

export default ArtDetail;
