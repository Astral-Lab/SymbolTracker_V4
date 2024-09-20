import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Layout from './components/Layout';
import Landing from './pages/Landing';
import { RAIDS_CONFIG } from './lib/config';
import Locations from './pages/Locations';
import NotFound from './pages/NotFound';

const locations = RAIDS_CONFIG.map(raid => ({
  path: `/raid/${raid.name}`,
  element: <Locations raid={raid}/>
}));

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Landing raids={RAIDS_CONFIG}/>
      },
      ...locations,
      {
        path: "*",
        element: <NotFound/>
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);