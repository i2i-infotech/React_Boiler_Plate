import React from "react";
// Layout
import Drawer from "../layout";

// Pages
import LoginTab from "../components/Tabs";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AiAgent from "../components/AiAgent";
import Phone from "../components/Phone";
import Billing from "../components/Billing";
const routes = [
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Drawer />,
        children: [
          // { path: "", element: <Home /> },
          { path: "/", element: <AiAgent /> },
          { path: "/aiagent", element: <AiAgent /> },
          { path: "/phone", element: <Phone /> },
          { path: "/billing", element: <Billing /> },
        ],
      },
      {
        path: "/login",
        element: <LoginTab />,
      },
    ],
  },
];
export default routes;
