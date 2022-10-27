import './pagination.custom.scss';
import { Pagination } from 'antd';
import React from 'react';
import s from './index.scss';

// import { setNavShow } from '../../store/navSlice';
import { useAppDispatch} from '../../app/hooks';


interface Props {
  current?: number;
  defaultPageSize?: number;
  total?: number;
  setPage?: Function;
  scrollToTop?: number;
  autoScroll?: boolean;
  setNavShow?: Function;
}

const MyPagination: React.FC<Props> = ({
  current,
  defaultPageSize = 8,
  total = 0,
  setPage,
  scrollToTop = 0,
  autoScroll = false,
  setNavShow
}) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {total > defaultPageSize ? (
        <div id='myPagination' className={s.pageBox}>
          <Pagination
            current={current}
            total={total}
            defaultPageSize={defaultPageSize}
            showSizeChanger={false}
            showTitle={false}
            onChange={(page: number) => {
              setPage?.(page)
              dispatch(setNavShow?.(false))
              autoScroll && window.scrollTo(0, scrollToTop)
            }}
          />
        </div>
      ) : null}
    </>
  );
};

export default MyPagination