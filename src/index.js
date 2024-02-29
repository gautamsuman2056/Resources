import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ResourcesDetails from "./pages/ResourcesDetails";
import Business from "./pages/Business";
import Personal from "./pages/Personal";
import UseCase from "./pages/UseCase";
import Pricing from "./pages/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/resourcesDetails",
    element: <ResourcesDetails />,
  },
  {
    path: "/resources",
    element: <App />,
  },
  {
    path: "/Busines",
    element: <Business />,
  },
  {
    path: "/Personal",
    element: <Personal />,
  },
  {
    path: "/UseCase",
    element: <UseCase />,
  },
  {
    path: "/Pricing",
    element: <Pricing />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
