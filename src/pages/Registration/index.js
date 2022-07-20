import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import login from "../../assets/images/Login/US.png";
import Typography from "@mui/material/Typography";
import { createStyles, makeStyles } from "@mui/styles";
import styles from "./index.module.scss";

const Registration = () => {
  const classes = useStyles();
  return (
    <div className={styles.registration_form}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid
            lg={6}
            md={6}
            sm={12}
            xs={12}
            sx={{ display: { xs: "none", sm: "none", md: "grid" } }}
          >
            <div className={styles.img_container}>
              <img src={login} alt="register_image" />
            </div>
          </Grid>
          <Grid
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className={styles.register_container}
          >
            <div className={[classes.register_part, styles.register_part].join(" ")}>
              <div className={styles.register_title}>Forgot Password</div>
              <div className={styles.register_sub_title}>
                We will send a link to your email address to reset your Password
              </div>
              <div className={styles.register_email_container}>
                <Typography
                  className={styles.register_email_title}
                  gutterBottom
                  component="div"
                >
                  Email Address
                </Typography>
                <TextField
                  // value={userName}
                  // placeholder="Enter Your Email"
                  className="text-field"
                  id="outlined-start-adornment"
                  // onChange={(e) => {
                  //   setUserName(e.target.value);
                  //   setInvalid(false);
                  // }}
                  fullWidth
                />
              </div>

              <div className={styles.submit_btn_container}>
                <Button className={styles.submit_btn}>Submit</Button>
              </div>
              <div className={styles.back_login_container}>
                <span>Back to Login</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Registration;


const useStyles = makeStyles((theme) =>
  createStyles({
    register_part: {
      height: "100vh",
      width: "64%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  })
);