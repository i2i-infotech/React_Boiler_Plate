import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, InputBase } from "@mui/material";
import styles from "./index.module.scss";
import { styled } from "@mui/system";
import { alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(2),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  height: "38px",
  background: "white",
  border: "1px solid #DBDBDB",
  borderRadius: "5px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "24ch",
    },
  },
}));

const Header = () => {
  return (
    <div className={styles.header_container}>
      <Grid container className={styles.header_main}>
        <div className={styles.search_notification}>
          <Grid item >
            <div className={styles.menu_side}>
              <div className={styles.menu_icon_container}>
                <MenuIcon className={styles.menu_icon} />
              </div>
              <div className={styles.logo_name}>
                <span>MAP</span>
              </div>
            </div>
          </Grid>
          <div className={styles.search_input}>
            <Grid
              
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search...."
                  inputProps={{ "aria-label": "search" }}
                  // value={searched}
                  // onChange={(e) => requestSearch(e.target.value)}
                />
              </Search>
            </Grid>
          </div>
        </div>
        <div className={styles.notifiaction_container}>
          <Grid>
            <div className={styles.notification_icon}>
              <NotificationsOutlinedIcon />
            </div>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default Header;
