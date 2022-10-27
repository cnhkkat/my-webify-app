import { Skeleton } from 'antd';
import classNames from 'classnames';
import React, { MouseEventHandler } from 'react';

import s from './index.scss';

interface Props {
  className?: string;
  loading?: boolean;
  isStatic?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  children?: any
}

const Card: React.FC<Props> = ({ className, loading, isStatic, onClick, children }) => {
  return (
    <div
      className={classNames(
        s.card,
        { [s.center]: loading },
        { [s.active]: !isStatic },
        className
      )}
      onClick={onClick}
    >
      {loading ? <Skeleton paragraph={{ rows: 1 }} /> : children}
    </div>
  );
};

export default Card;