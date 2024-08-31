import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Grid2, TextField } from '@mui/material';
import useAutherData from '../../hooks/Auther';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const AddAuther = ({ open, setOpen }) => {
  const { addAutherAction } = useAutherData();
  const [quotesName, setQuotesName] = React.useState('');
  const [autherName, setAutherName] = React.useState('');
  const [eviation, setEviation] = React.useState('');

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddData = () => {
    const newAuther = {
      quotes: quotesName,
      auther: autherName,
      category: eviation,
    };
    addAutherAction(newAuther);
    handleClose();
  };
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add Auther Detail
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 12,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Grid2 sx={{ mb: "10px" }}>
            <Typography >Quotes Name</Typography>
            <TextField fullWidth onChange={(e) => setQuotesName(e.target.value)}
              sx={{
                '& .MuiInputBase-input': {
                  padding: '8.5px 14px',
                },
              }}
            />
          </Grid2>
          <Grid2 sx={{ mb: "10px" }}>
            <Typography>Auther Name</Typography>
            <TextField fullWidth onChange={(e) => setAutherName(e.target.value)}
              sx={{
                '& .MuiInputBase-input': {
                  padding: '8.5px 14px',
                },
              }}
            />
          </Grid2>
          <Grid2 sx={{ mb: "10px" }}>
            <Typography>Eviation</Typography>
            <TextField fullWidth onChange={(e) => setEviation(e.target.value)}
              sx={{
                '& .MuiInputBase-input': {
                  padding: '8.5px 14px',
                },
              }}
            />
          </Grid2>
        </DialogContent>
        <DialogActions>
          <Button sx={{ textTransform: "capitalize" }} variant='outlined' autoFocus onClick={handleAddData}>
            Add Data
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}

export default AddAuther;