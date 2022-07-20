import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./index.module.scss";
import { DrawerData } from "../../utils/drawermenu";

const DashboardSidebar = () => {
  const path = useLocation();
  const [currentPath, setPath] = useState("");
  console.log("active", path);

  React.useEffect(() => {
    setPath(path.pathname);
  }, [path]);

  return (
    <div className={styles.dashboard_sidebar_continer}>
      <div className={styles.link_container}>
        {DrawerData.map((item, index) => {
          return (
            <div
              key={index}
              className={[
                styles.link_data,
                `${item.link === currentPath && styles.active}`,
              ].join(" ")}
            >
              <div>{item.icon}</div>
              <div className={styles.link_name}>
                <Link to={item.link}>
                  <span>{item.name}</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardSidebar;
