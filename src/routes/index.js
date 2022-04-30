// User Routes
import LoginTab from "../components/Tabs";
import Home from "../pages/Home";
import Login from "../pages/Login";

const routes = [
  {
    path: "/",
    children: [
      { path: "", element: <Home /> },
      {
        path: "/login",
        element: <LoginTab />,
      },
    ],
  },
];
export default routes;
