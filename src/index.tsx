import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store  from './store/store';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/Home/error-page';
import { LazyImportComponent } from './pages/lazy-import-component';
const Home = React.lazy(()=>import('./pages/Home'))
const Say = React.lazy(()=>import('./pages/Say'))
const Msg = React.lazy(()=>import('./pages/Msg'))

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LazyImportComponent lazyChildren={Home}  />
      },
      {
        path: "/say",
        element:<Say />
      },
      {
        path: "/msg",
        element:<Msg />
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
