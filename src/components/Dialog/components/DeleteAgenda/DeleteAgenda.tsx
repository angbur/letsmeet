import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { closeDialog } from '@store/dialogSlice';
import { selectEditedAgenda, setDefaultAgenda } from '@store/agendaSlice';
import { useDeleteAgendaMutation } from '@services/agenda/agenda';
import routes from '@components/App/routing/routes';

const DeleteAgenda = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => dispatch(closeDialog());

  const handleDeleteAgenda = () => {
    deleteAgenda(editedAgenda.id);
    handleClose();
    dispatch(setDefaultAgenda());
    navigate(routes.homepage);
  };

  const editedAgenda = useSelector(selectEditedAgenda);
  const [deleteAgenda] = useDeleteAgendaMutation();

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="start" width="25.813rem">
      <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
        Are you sure you want to delete this agenda?
      </Typography>
      <Typography variant="h5">Removed agenda can&apos;t be restored.</Typography>
      <DialogActions sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        <Button variant="text" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="text" onClick={handleDeleteAgenda}>
          Delete
        </Button>
      </DialogActions>
    </Box>
  );
};

export default DeleteAgenda;
