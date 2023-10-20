import React from 'react';
import Box from '@mui/material/Box';
import Navigation from '@components/Navigation/Navigation';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import AgendaList from '@components/Agenda/AgendaList/AgendaList';

const HomePage = () => (
  <Box display="flex" style={{ marginTop: '2.563rem', gap: '3.125rem' }}>
    <Navigation />
    <Box display="flex" flexDirection="column" alignItems="start" sx={{ gap: '1.5rem' }}>
      <Button startIcon={<AddIcon />}>Add new agenda</Button>
      <Typography variant="h2">My recent agendas</Typography>
      <AgendaList numberOfAgendas={5} />
    </Box>
  </Box>
);

export default HomePage;
