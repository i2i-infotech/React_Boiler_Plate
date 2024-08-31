import React from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid2, IconButton, Paper, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import AddAuther from '../../components/AddAutherModal';
import DeleteIcon from '@mui/icons-material/Delete';
import useAutherData from '../../hooks/Auther';
import styles from "./index.module.scss";

const columns = [
  { field: 'quotes', headerName: 'Quotes', flex: 1 },
  { field: 'auther', headerName: 'Auther', flex: 1 },
  { field: 'category', headerName: 'Category', flex: 1 },
  { field: 'action', headerName: 'Action', flex: 1, renderCell: (params) => <RowMenuDeleteCell {...params} />, },
];

function RowMenuDeleteCell(props) {

  const { deleteAutherAction } = useAutherData();
  const [open, setOpen] = React.useState(false);
  const { id } = props.row;

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDeletePerson = () => {
    deleteAutherAction({id});
    handleClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">{"Delete Item"}</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this item?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeletePerson} color="error">
            Yes, Delete
          </Button>
        </DialogActions>
      </Dialog>
      <IconButton
        color="error"
        size="small"
        aria-label="delete"
        onClick={handleClickOpen}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </>
  );
}

const paginationModel = { page: 0, pageSize: 5 };

const Home = () => {
  const { autherData } = useAutherData();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const rowsWithId = (autherData || []).map((item, index) => ({
    ...item,
    id: index   // Assigning index as ID if no ID is present
  }));
  return (
    <>
      <Grid2 className={styles.title_container}><Typography variant='h3' gutterBottom className={styles.title}>Quotes Name</Typography></Grid2>
      <Box className={styles.box_container}>
        <Grid2 sx={{ display: "flex", justifyContent: "end", mb: "1rem" }}>
          <Button variant="contained" startIcon={<AddIcon />} onClick={handleClickOpen}>
            Add
          </Button>
        </Grid2>
        <Paper sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rowsWithId}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            sx={{ border: 0 }}
          />
        </Paper>
      </Box>
      <AddAuther open={open} setOpen={setOpen} />
    </>
  )
}

export default Home
