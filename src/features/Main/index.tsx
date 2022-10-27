import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ErrorBoundary from '../ErrorBoundary';

import s from './index.scss'

const Home = lazy(()=> import(/* webpackPrefetch:true */ '../../pages/home'))

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