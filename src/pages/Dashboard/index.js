import { Grid } from "@mui/material";
import React from "react";
import DashboardLayout from "../../components/DashboardRight";
import DashboardSidebar from "../../components/DashboardSidebar";
import Header from "../../components/Header";
import styles from "./index.module.scss"

const Dashboard = () => {
  return (
    <div className={styles.dahboard_container}>
      {/* <Grid >
        <Header />
      </Grid>
      <DashboardSidebar />
      <DashboardLayout /> */}
    </div>
  );
};

export default Dashboard;
