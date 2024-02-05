import { Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Table from "../Table";
import AddIcon from "@mui/icons-material/Add";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function Index() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item sx={{ mb: 2, px: 5, pt: 5, pb: 3, height: "88vh" }}>
            <Box sx={{ textAlign: "start" }}>
              <Typography variant="h3" gutterBottom>
                Billing
              </Typography>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Payment Method" {...a11yProps(0)} />
                    <Tab label="Billing History" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                  <Button
                    variant="outlined"
                    startIcon={<AddIcon />}
                    sx={{ justifyContent: "start" }}
                  >
                    Add Payment Method
                  </Button>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <Table />
                </CustomTabPanel>
              </Box>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default Index;
