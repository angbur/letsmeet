import React, { ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { ToastVariant, closeToast, selectToastContent, selectToastIsOpen } from '@store/toastSlice';
import getToastActionComponent from './toastUtils';

const Toast = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectToastIsOpen);
  const content = useSelector(selectToastContent);
  const { palette } = useTheme();
  const ToastActionComponent: ReactNode = getToastActionComponent(content?.action);

  const getBackground = (toastVariant: ToastVariant) => {
    switch (toastVariant) {
      case 'default':
        return;
      case 'error':
        return palette.error.main;
      case 'success':
        return palette.success.main;
      default:
        return;
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(closeToast());
  };

  return (
    <>
      {content ? (
        <Snackbar
          open={isOpen}
          autoHideDuration={6000}
          onClose={handleClose}
          message={content.text}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          action={content.action ? <ToastActionComponent /> : null}
          sx={{
            '& .MuiSnackbarContent-root': {
              background: getBackground(content.variant),
            },
          }}
        />
      ) : null}
    </>
  );
};

export default Toast;
