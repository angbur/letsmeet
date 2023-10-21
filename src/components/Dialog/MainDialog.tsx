import React, { ReactNode } from 'react';
import { closeDialog, selectDialogIsOpen, selectDialogType } from '@store/dialogSlice';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import getDialogContentComponent from './dialogUtils';
import CircularProgress from '@mui/material/CircularProgress';

const MainDialog = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectDialogIsOpen);
  const contentType = useSelector(selectDialogType);
  const DialogContentComponent: ReactNode = getDialogContentComponent(contentType);

  const handleClose = () => dispatch(closeDialog());
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      {DialogContentComponent ? (
        <DialogContent>
          <DialogContentComponent />
        </DialogContent>
      ) : (
        <CircularProgress color="primary" />
      )}
    </Dialog>
  );
};

export default MainDialog;
