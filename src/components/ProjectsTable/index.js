import React, { useState } from "react";
import { Box, styled } from "@mui/system";
import { connect } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { GridOverlay, GridToolbar } from "@material-ui/data-grid";
import { Button, Grid, IconButton, InputBase, LinearProgress } from "@mui/material";
import { Chip } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import { alpha } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { STATUS_COLOR } from "../../utils/contsant";




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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  height: "38px",
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

const columns = [
  {
    field: "id",
    headerName: "Id",
    minWidth: 70,
    editable: false,
  },
  {
    field: "projectname",
    headerName: "Project Name",
    minWidth: 130,
    flex: 1,
    editable: false,
  },
  {
    field: "projecttype",
    headerName: "Project Type",
    minWidth: 130,
    flex: 1,
    editable: false,
  },
  {
    field: "createddate",
    headerName: "Craeted Date",
    minWidth: 130,
    flex: 1,
    editable: false,
  },
  {
    field: "craetedby",
    headerName: "Created By",
    minWidth: 130,
    flex: 1,
    editable: false,
  },
  {
    field: "status",
    headerName: "Status",
    minWidth: 90,
    // flex: 1,
    editable: false,
    type: "singleSelect",
    renderCell: (cellValues) => {
      return (
        <>
          <Chip
            size="small"
            label={cellValues.value}
            style={{
              backgroundColor: STATUS_COLOR[cellValues.value],
              color: "white",
            }}
          />
        </>
      );
    },
    valueOptions: [
      "CLOSE",
      "PENDING",
      "OPEN",
      "PROGRESS",
    ],
  },
  {
    field: "utilizememory",
    headerName: "Utilize Memory",
    minWidth: 130,
    flex: 1,
    editable: false,
  },
  {
    field: "view button",
    headerName: "Action",
    minWidth: 130,
    flex: 1,
    editable: false,
    // type: "number",
    align: "center",
    disableColumnMenu: true,
    disableReorder: true,
    renderCell: RowMenuEditCell,
  },
];

const rows = [
  {
    id: 145345345,
    projectname: "Snow",
    projecttype: "Jon",
    createddate: 35,
    craetedby: "55",
    status: "44",
    utilizememory: "55",
  },
  {
    id: 54345345321341,
    projectname: "Snow",
    projecttype: "Jon",
    createddate: 35,
    craetedby: "55",
    status: "44",
    utilizememory: "55",
  },
  {
    id: 154345354,
    projectname: "Snow",
    projecttype: "Jon",
    createddate: 35,
    craetedby: "55",
    status: "44",
    utilizememory: "55",
  },
  {
    id: 453453451,
    projectname: "Snow",
    projecttype: "Jon",
    createddate: 35,
    craetedby: "55",
    status: "44",
    utilizememory: "55",
  },
  {
    id: 1453453543,
    projectname: "Snow",
    projecttype: "Jon",
    createddate: 35,
    craetedby: "55",
    status: "44",
    utilizememory: "55",
  },
  {
    id: 31232135861,
    projectname: "Snow",
    projecttype: "Jon",
    createddate: 35,
    craetedby: "55",
    status: "44",
    utilizememory: "55",
  },
  {
    id: 154645645,
    projectname: "Snow",
    projecttype: "Jon",
    createddate: 35,
    craetedby: "55",
    status: "44",
    utilizememory: "55",
  },
  {
    id: 3546541,
    projectname: "Snow",
    projecttype: "Jon",
    createddate: 35,
    craetedby: "55",
    status: "44",
    utilizememory: "55",
  },
  {
    id: 154654654,
    projectname: "Snow",
    projecttype: "Jon",
    createddate: 35,
    craetedby: "55",
    status: "44",
    utilizememory: "55",
  },
  {
    id: 14645654,
    projectname: "Snow",
    projecttype: "Jon",
    createddate: 35,
    craetedby: "55",
    status: "44",
    utilizememory: "55",
  },
  {
    id: 3543541,
    projectname: "Snow",
    projecttype: "Jon",
    createddate: 35,
    craetedby: "55",
    status: "44",
    utilizememory: "55",
  },
  {
    id: 113354,
    projectname: "Snow",
    projecttype: "Jon",
    createddate: 35,
    craetedby: "55",
    status: "44",
    utilizememory: "55",
  },
  {
    id: 4564561,
    projectname: "Snow",
    projecttype: "Jon",
    createddate: 35,
    craetedby: "55",
    status: "44",
    utilizememory: "55",
  },
  {
    id: 464561,
    projectname: "Snow",
    projecttype: "Jon",
    createddate: 35,
    craetedby: "55",
    status: "44",
    utilizememory: "55",
  },
  {
    id: 4561,
    projectname: "Snow",
    projecttype: "Jon",
    createddate: 35,
    craetedby: "55",
    status: "44",
    utilizememory: "55",
  },
  {
    id: 1645,
    projectname: "Snow",
    projecttype: "Jon",
    createddate: 35,
    craetedby: "55",
    status: "44",
    utilizememory: "55",
  },
];



function RowMenuEditCell(props) {
  const { api, id } = props;

  const navigate = useNavigate();

  const handleEditClick = (event) => {
    event.stopPropagation();
    console.log("hiiiii", props.row);
    navigate(`/order/${id}`);
  };
  return (
    <div>
      <IconButton
        color="inherit"
        size="small"
        aria-label="view"
        onClick={handleEditClick}
      >
        <RemoveRedEyeOutlinedIcon />
      </IconButton>
      {/* <EditIcon fontSize="small" /> */}
    </div>
  );
}

function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <div style={{ position: "absolute", top: 0, width: "100%" }}>
        <LinearProgress />
      </div>
    </GridOverlay>
  );
}

export const ProjectsTable = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className={styles.project_tbale_container}>
      <Box
        sx={{
          width: "100%",
          background: "#FFFFFF",
          // pt: "1%",
          // height: "calc(100vh - 92px)",
        }}
      >
        <div style={{ height: 600, width: "100%" }}>
          <div className={styles.projects_data}>
            <div className={styles.show_data}>
              <span>Show</span>
              <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    className={styles.table_select}
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>13</em>
                    </MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className={styles.search_data}>
              <div>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                  }}
                >
                  <Search className={styles.search_input}>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search..."
                      inputProps={{ "aria-label": "search" }}
                      // value={searched}
                      // onChange={(e) => requestSearch(e.target.value)}
                    />
                  </Search>
                </Grid>
              </div>
              <div className={styles.btn_container}>
                <Button className={styles.create_btn}>Create Project</Button>
              </div>
            </div>
          </div>
          <DataGrid
            sx={{
              border: 0, // also tried setting to none
            }}
            rows={rows}
            columns={columns}
            pageSize={10}
            pagination
            autoPageSize
            autoHeight
            // components={{
            //   Toolbar: GridToolbar,
            //   LoadingOverlay: CustomLoadingOverlay,
            // }}
            // loading={loading}
          />
        </div>
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsTable);
