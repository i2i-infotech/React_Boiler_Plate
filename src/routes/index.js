// Layout
import Layout from "../common/Layout";

// Pages
import Login from "../pages/Login/index";
import Registration from "../pages/Registration/index";
import DashboardLayout from "../components/DashboardLayout/index";
import Projects from "../pages/Projects/index";

const routes = [
  {
    path: "/",
    element: <DashboardLayout/>,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Registration /> },
      // { path: "/dashboard", element: <DashboardLayout /> },
      { path: "/projects", element: <Projects /> },
      
    ],
  },
];
export default routes;
