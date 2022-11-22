import useUrlState from '@ahooksjs/use-url-state';
import { useRequest } from 'ahooks';
import React from 'react';

import Comment from '@/features/Comment';
import Layout from '@/features/Layout';
import MarkDown from '@/features/MarkDown';
import { DB } from '@/utils/api/dbConfig';
import { getWhereData } from '@/utils/api/getWhereData';
import { staleTime } from '@/utils/constants';

// import CopyRight from './CopyRight';
import s from './index.scss';
import Navbar from './Navbar';
import PostTags from './PostTags';

const Post: React.FC = () => {
  const [search] = useUrlState();

  const { data, loading } = useRequest(getWhereData, {
    defaultParams: [DB.Article, { titleEng: search.title }],
    retryCount: 3,
    cacheKey: `Post-${DB.Article}-${search.title}`,
    staleTime
  });

  return (
    <Layout
      title={data?.data[0].title}
      loading={loading}
      classes={data?.data[0].classes}
      date={data?.data[0].date}
      isPost={true}
      rows={14}
    >
      <MarkDown content={data?.data[0].content} className={s.mb} />
      <PostTags tags={data?.data[0].tags} />
      {/* <CopyRight title={data?.data[0].title} titleEng={data?.data[0].titleEng} /> */}
      <Comment titleEng={search.title} title={data?.data[0].title} />
      <Navbar content={data?.data[0].content} />
    </Layout>
  );
};

export default Post;
