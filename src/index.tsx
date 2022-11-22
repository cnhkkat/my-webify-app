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
const Link = React.lazy(()=>import('./pages/Link'))
const Log = React.lazy(()=>import('./pages/Log'))
const About = React.lazy(()=>import('./pages/About'))
const Show = React.lazy(()=>import('./pages/Show'))
const Classes = React.lazy(()=>import('./pages/Classes'))
const Tags = React.lazy(()=>import('./pages/Tags'))
const Articles = React.lazy(()=>import('./pages/Articles'))
const ArtDetail = React.lazy(()=>import('./pages/ArtDetail'))
const Post = React.lazy(()=>import('./pages/Post'))

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
        path: "/articles",
        element: <LazyImportComponent lazyChildren={Articles}  />
      },
      {
        path: "/say",
        element: <LazyImportComponent lazyChildren={Say}  />
      },
      {
        path: "/msg",
        element: <LazyImportComponent lazyChildren={Msg}  />
      },
      {
        path: "/link",
        element: <LazyImportComponent lazyChildren={Link}  />
      },
      {
        path: "/log",
        element: <LazyImportComponent lazyChildren={Log}  />
      },
      {
        path: "/about",
        element: <LazyImportComponent lazyChildren={About}  />
      },
      {
        path: "/show",
        element: <LazyImportComponent lazyChildren={Show}  />
      },
      {
        path: "/classes",
        element: <LazyImportComponent lazyChildren={Classes}  />
      },
      {
        path: "/tags",
        element: <LazyImportComponent lazyChildren={Tags}  />
      },
      {
        path: "/artDetail",
        element: <LazyImportComponent lazyChildren={ArtDetail}  />
      },
      {
        path: "/post",
        element: <LazyImportComponent lazyChildren={Post}  />
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
