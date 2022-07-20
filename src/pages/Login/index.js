import React, { useState } from "react";
import login from "../../assets/images/Login/US.png";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { createStyles, makeStyles } from "@mui/styles";
import styles from "./index.module.scss";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();

  return (
    <div className={styles.login_form}>
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
              <img src={login} alt="login_image" />
            </div>
          </Grid>

          <Grid
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className={styles.login_container}
          >
            <div className={[classes.login_part, styles.login_part].join(" ")}>
              <div className={styles.login_title}>Login</div>
              <div className={styles.email_container}>
                <Typography
                  className={styles.email_title}
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
              <div className={styles.pwd_container}>
                <Typography
                  className={styles.pwd_title}
                  gutterBottom
                  component="div"
                >
                  Password
                </Typography>
                <FormControl fullWidth variant="outlined">
                  <OutlinedInput
                    // placeholder="Password"
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    // onChange={(e) => {
                    //   setPassword(e.target.value);
                    //   setInvalid(false);
                    // }}
                    className="pl-10"
                    // value={password}
                    // startAdornment={<VpnKeyOutlinedIcon />}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                {/* <span className="text-red">{error.password || ""}</span> */}
              </div>
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Remember Password"
                  />
                </FormGroup>
              </div>
              <div className={styles.btn_container}>
                <Button className={styles.login_btn}>Login</Button>
              </div>
              <div className={styles.forgot_pwd_container}>
                <Link to="/register">
                  <span>Forgot Password ?</span>
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Login;

const useStyles = makeStyles((theme) =>
  createStyles({
    login_part: {
      height: "100vh",
      width: "64%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  })
);
