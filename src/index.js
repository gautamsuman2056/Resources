import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ResourcesDetails from './pages/ResourcesDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/resourcesDetails",
    element: <ResourcesDetails/>,
  },
  {
    path: "/resources",
    element: <App/>,
  },



]);
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render (<RouterProvider router= {router}/>);
 





