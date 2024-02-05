import {
  Avatar,
  Box,
  Button,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import AgentModel from "../AgentModel";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function Index() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6} lg={2} xl={2}>
          <Box minWidth={"100px"}>
            <Item sx={{ height: "88vh", padding: "20px" }}>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<AddIcon />}
                sx={{ justifyContent: "start" }}
              >
                Add Phone Number
              </Button>
              <ListItem>
                <ListItemText primary="Add Agent" />
              </ListItem>
            </Item>
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={10} xl={10}>
          <Item sx={{ mb: 2, px: 5, pt: 5, pb: 3, height: "88vh" }}>
            {/* <Grid
              container
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Grid sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h5" fontWeight={600}>
                  New Agent
                </Typography>
                <EditIcon sx={{ mx: 1 }} />
              </Grid>
              <Grid>
                <Box sx={{ background: "#F7F6F0", p: 1, borderRadius: "10px" }}>
                  <DeleteOutlineIcon />
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ textAlign: "start" }}>
              <Typography variant="subtitle1" fontWeight={400} gutterBottom>
                ID: 4950e406c2285ca72d07abbdbe605a83
              </Typography>

              <Grid sx={{ display: "flex" }}>
                <div onClick={handleClickOpen}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ mr: 2 }}
                    />
                    <Typography variant="subtitle2" fontWeight={600}>
                      Rayan
                    </Typography>
                    <ArrowDropDownIcon />
                  </Box>
                </div>
                <Grid sx={{ ml: 3 }}>
                  <Button variant="contained" startIcon={<WifiCalling3Icon />}>
                    Make a Web Call
                  </Button>
                </Grid>
              </Grid>
            </Box> */}
          </Item>
          {/* second tab */}
          {/* <Item sx={{ mb: 2, p: 3, pb: 5 }}>
            <Grid container>
              <Grid sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Custom LLM URL
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{ textAlign: "start" }}>
              <Typography variant="subtitle2" fontWeight={400} gutterBottom>
                Fully customize response generation with your LLM.{" "}
                <Link
                  href="link-to-your-wiki"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (wiki)
                </Link>
              </Typography>
              <TextField
                sx={{ width: "60%", marginBottom: "6px" }}
                label="Full Width"
                id="fullWidth"
              />
              <Typography variant="subtitle2" fontWeight={400} gutterBottom>
                Don’t have custom LLM?{" "}
                <Link
                  href="link-to-your-wiki"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +Create a simple Retell LLM For Testing
                </Link>
              </Typography>
            </Box>
          </Item> */}
        </Grid>
      </Grid>
      <AgentModel open={open} setOpen={setOpen} />
    </>
  );
}

export default Index;
