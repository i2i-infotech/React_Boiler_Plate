import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashboardSidebar from "../DashboardSidebar";
import Header from "../Header";
import styles from "./index.module.scss";

const DashboardRight = (props) => {
  const { isAuth } = props;
  const logged = isAuth;
  const [isActive, setIsActive] = useState(false);
  const [fullScreen, setFullScreen] = useState(true);
  // console.log("click", isActive);
  const location = useLocation();
  if (
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/forgotpassword" ||
    location.pathname === "/page404"
  ) {
    return (
      <>
        <Outlet context={{ isAuth: isAuth, logged: logged }} />
        {/* <GlobalNotification/> */}
      </>
    );
  }
  return (
    <>
      <Header />
      <div className={styles.layout_container}>
        <div className={styles.dashboard_layout_main}>
          <DashboardSidebar />
          <div className={styles.main_layout}>
            <div className={styles.heading_Title}>
              <h5>Projects</h5>
              <div>
                <span>Projects</span>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardRight;
