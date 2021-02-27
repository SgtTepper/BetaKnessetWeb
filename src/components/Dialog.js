import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';


const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    fontFamily: "'Secular One', sans-serif",
  },
}))(MuiDialogContent);

export default function SiteDialog({ children, open, setOpen, closeText }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogContent>
            {children}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary" variant="contained">
            {closeText}
          </Button>
        </DialogActions>
    </Dialog>
  );
}