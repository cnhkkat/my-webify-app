import { DB } from '@/utils/api/dbConfig';
import { getOrderData } from '@/utils/api/getOrderData';
import { getSum } from '@/utils/api/getSum';

export const fetchData = async () => {
  const [about, classes, artSum] = await Promise.all([
    getOrderData({ dbName: DB.About }),
    getOrderData({ dbName: DB.Class }),
    getSum(DB.Article)
  ]);

  return {
    about,
    classes,
    artSum
  };
};
