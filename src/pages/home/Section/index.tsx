import { useRequest, useSafeState } from 'ahooks';
import React from 'react';

import { useNavigate } from 'react-router-dom';

import MyPagination from '@/features/MyPagination';
import { DB } from '@/utils/api/dbConfig';
import { getPageData } from '@/utils/api/getPageData';
import { homeSize, staleTime } from '@/utils/constants';

import { useAppSelector } from '@/app/hooks';
import s from './index.scss';
import PostCard from './PostCard';

interface theAtc {
  classes: string;
  content: string;
  date: number;
  tags: string[];
  title: string;
  titleEng: string;
  url: string;
  _id: string;
  _openid: string;
}


const Section: React.FC = () => {
  const navigate = useNavigate();
  const artSum = useAppSelector(state => state.artSum.value)
  const [page, setPage] = useSafeState(1);

  const { data, loading } = useRequest(
    () =>
      getPageData({
        dbName: DB.Article,
        sortKey: 'date',
        isAsc: false,
        page,
        size: homeSize
      }),
    {
      retryCount: 3,
      refreshDeps: [page],
      cacheKey: `Section-${DB.Article}-${page}`,
      staleTime
    }
  );

  return (
    <section className={s.section}>
      {data?.data.map(({ _id, title, content, date, tags, titleEng }: theAtc) => (
        <PostCard
          key={_id}
          title={title}
          content={content}
          date={date}
          tags={tags}
          loading={loading}
          onClick={() => navigate(`/post?title=${encodeURIComponent(titleEng)}`)}
        />
      ))}
      <MyPagination
        current={page}
        defaultPageSize={homeSize}
        total={artSum}
        setPage={setPage}
        autoScroll={true}
        scrollToTop={document.body.clientHeight - 80}
      />
    </section>
  );
};

export default Section;
