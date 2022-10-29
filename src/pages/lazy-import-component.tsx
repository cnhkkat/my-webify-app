import React, { LazyExoticComponent } from 'react';

export const LazyImportComponent = (props: {
  lazyChildren: LazyExoticComponent<() => JSX.Element>;
}) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <props.lazyChildren />
    </React.Suspense>
  );
};