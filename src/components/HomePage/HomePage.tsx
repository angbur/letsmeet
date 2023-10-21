import React from 'react';
import Box from '@mui/material/Box';
import Navigation from '@components/Navigation/Navigation';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import AgendaList from '@components/Agenda/AgendaList/AgendaList';
import { useNavigate } from 'react-router-dom';
import routes from '@components/App/routing/routes';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" alignItems="baseline" style={{ gap: '3.125rem' }}>
      <Navigation />
      <Box display="flex" flexDirection="column" alignItems="start" sx={{ gap: '1.5rem', flex: 1 }}>
        <Button startIcon={<AddIcon />} onClick={() => navigate(routes.newAgenda)}>
          Add new agenda
        </Button>
        <Typography variant="h2">My recent agendas</Typography>
        <AgendaList numberOfAgendas={5} recentAgendas />
      </Box>
    </Box>
  );
};

export default HomePage;
