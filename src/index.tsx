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

const Home = React.lazy(()=>import('./pages/Home'))
const Say = React.lazy(()=>import('./pages/Say'))

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
        element:<Home />
      },
      {
        path: "/say",
        element:<Say />
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
