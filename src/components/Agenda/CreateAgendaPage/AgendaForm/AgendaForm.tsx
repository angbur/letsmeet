import React from 'react';
import Box from '@mui/material/Box';
import GeneralOptions from './components/GeneralOptions/GeneralOptions';

const AgendaForm = () => (
  <Box display={'flex'} justifyContent={'flex-start'} flexDirection={'column'} alignItems={'center'} width={'100%'}>
    <GeneralOptions />
  </Box>
);

export default AgendaForm;
