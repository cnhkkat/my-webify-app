import { useRequest, useSafeState } from 'ahooks';
import React from 'react';

import Layout from '@/features/Layout';
import MyPagination from '@/features/MyPagination';
import { DB } from '@/utils/api/dbConfig';
import { getWhereOrderPageSum } from '@/utils/api/getWhereOrderPageSum';
import { detailPostSize, staleTime } from '@/utils/constants';

import { Title } from '../titleConfig';
import ArtList from './ArtList';
import Search from './Search';

const Articles: React.FC = () => {
  const [page, setPage] = useSafeState(1);

  const [where, setWhere] = useSafeState(() => ({}));

  const { data, loading, run } = useRequest(
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
      cacheKey: `Articles-${DB.Article}-${JSON.stringify(where)}-${page}`,
      staleTime
    }
  );

  return (
    <Layout title={Title.Articles}>
      <Search page={page} setPage={setPage} where={where} setWhere={setWhere} run={run} />
      <ArtList articles={data?.articles.data} loading={loading} />
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

export default Articles;
