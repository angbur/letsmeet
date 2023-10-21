import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { openDialog } from '@store/dialogSlice';

const AgendaCreator = () => {
  const dispatch = useDispatch();

  const handleAddNewTimeblock = () => dispatch(openDialog('createTimeblock'));
  return (
    <Box display="flex" justifyContent="flex-end" width="100%" height="fit-content">
      <Button variant="text" color="primary" startIcon={<AddIcon />} onClick={handleAddNewTimeblock}>
        Add new timeblock
      </Button>
    </Box>
  );
};

export default AgendaCreator;
