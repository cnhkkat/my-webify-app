import { getWhereOrderPageData } from '@/utils/api/getWhereOrderPageData';
import { getWhereSum } from '@/utils/api/getWhereSum';

export const getWhereOrderPageSum = async (config: {
  dbName: string;
  where: object;
  page: number;
  size: number;
  sortKey?: string;
  isAsc?: boolean;
}) => {
  const { dbName, where } = config;

  const [articles, sum] = await Promise.all([
    getWhereOrderPageData(config),
    getWhereSum(dbName, where)
  ]);

  return {
    articles,
    sum
  };
};
