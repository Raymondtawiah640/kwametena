import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './RootLayout';

import Home from './Home';

import BuyNow from './BuyNow';
import AnanseLab from './AnanseLab';
import ErrorPage from "./ErrorPage"; 

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
    
      
      { path: '/buy-now', element: <BuyNow /> },
      { path: '/ananselab', element: <AnanseLab /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
