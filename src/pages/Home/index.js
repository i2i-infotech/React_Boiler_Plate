import React from "react";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Toolbar from "@mui/material/Toolbar";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import ApiIcon from "@mui/icons-material/Api";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MonitorIcon from "@mui/icons-material/Monitor";
import AiAgent from "../../components/AiAgent";
import Phone from "../../components/Phone";
import Billing from "../../components/Billing";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AndroidIcon from "@mui/icons-material/Android";
import { AppBar } from "@mui/material";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [Tab, setTab] = React.useState("Ai Agent");
  const handleItemClick = (itemName) => {
    setTab(itemName);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { window } = props;

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      <ListItemButton onClick={() => handleItemClick("Ai Agent")}>
        <ListItemIcon>
          <AndroidIcon />
        </ListItemIcon>
        Ai Agent
      </ListItemButton>

      <ListItemButton onClick={() => handleItemClick("Phones")}>
        <ListItemIcon>
          <LocalPhoneIcon />
        </ListItemIcon>
        Phones
      </ListItemButton>

      <ListItemButton onClick={() => handleItemClick("History")}>
        <ListItemIcon>
          <HistoryEduIcon />
        </ListItemIcon>
        History
      </ListItemButton>

      <ListItemButton onClick={() => handleItemClick("Api keys")}>
        <ListItemIcon>
          <ApiIcon />
        </ListItemIcon>
        Api keys
      </ListItemButton>

      <ListItemButton onClick={() => handleItemClick("Billing")}>
        <ListItemIcon>
          <CreditCardIcon />
        </ListItemIcon>
        Billing
      </ListItemButton>

      <ListItemButton onClick={() => handleItemClick("Web Hooks")}>
        <ListItemIcon>
          <MonitorIcon />
        </ListItemIcon>
        Web Hooks
      </ListItemButton>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#F7F6F0",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#F7F6F0",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              border: "none", // Add this line to remove the border
              boxShadow: "none",
              background: "#F7F6F0",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: 3,
          background: "#F7F6F0",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: "100vh",
        }}
      >
        <Toolbar />
        {Tab === "Ai Agent" && <AiAgent />}
        {Tab === "Phones" && <Phone />}
        {Tab === "Billing" && <Billing />}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
