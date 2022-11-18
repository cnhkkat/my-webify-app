import { getWhereOrderPageData } from '@/utils/api/getWhereOrderPageData';
import { getWhereSum } from '@/utils/api/getWhereSum';

export const fetchData = async (config: {
  dbName: string;
  where: object;
  page: number;
  size: number;
  sortKey: string;
}) => {
  const { dbName, where, page, size, sortKey } = config;

  const [msgs, msgsSum] = await Promise.all([
    getWhereOrderPageData({
      dbName,
      where,
      page,
      size,
      sortKey
    }),
    getWhereSum(dbName, where)
  ]);

  return {
    msgs,
    msgsSum
  };
};
