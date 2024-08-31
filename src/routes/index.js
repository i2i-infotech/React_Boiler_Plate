import React from "react";
// Layout

// Pages
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    children: [
      {
        path: "/",
        children: [
          { path: "/", element: <Home /> },
        ],
      },
     
    ],
  },
];
export default routes;
