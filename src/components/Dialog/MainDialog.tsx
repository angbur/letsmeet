import React, { ReactNode } from 'react';
import { closeDialog, selectDialogIsOpen, selectDialogType } from '@store/dialogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import getDialogContentComponent from './dialogUtils';
// import CircularProgress from '@mui/material/CircularProgress';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '28px',
  },
}));

const MainDialog = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectDialogIsOpen);
  const contentType = useSelector(selectDialogType);
  const DialogContentComponent: ReactNode = getDialogContentComponent(contentType);

  const handleClose = () => dispatch(closeDialog());
  return (
    <StyledDialog open={isOpen} onClose={handleClose} maxWidth="xl">
      {DialogContentComponent ? (
        <DialogContent>
          <DialogContentComponent />
        </DialogContent>
      ) : null}
    </StyledDialog>
  );
};

export default MainDialog;
