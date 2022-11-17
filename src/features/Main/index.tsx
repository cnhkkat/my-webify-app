import React from 'react';

import s from './index.scss'

const Main: React.FC = () => {
  return (
    <main className={s.main}>
      <div className={s.center}>
        {/* <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
          </Suspense>
        </ErrorBoundary> */}
      </div>
    </main>
  )
}
export default Main