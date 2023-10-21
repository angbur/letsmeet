import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useNavigate } from 'react-router-dom';
import routes from '@components/App/routing/routes';
import Typography from '@mui/material/Typography';
import AgendaNavigation from './AgendaNavigation/AgendaNavigation';
import CreateAgendaContent from './CreateAgendaContent/CreateAgendaContent';

const CreateAgendaPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        variant="text"
        startIcon={<KeyboardArrowLeftIcon />}
        sx={{ padding: '0.625rem 1rem' }}
        onClick={() => navigate(routes.homepage)}
      >
        Home
      </Button>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: '0.5rem 0 2.375rem' }}
      >
        <Typography variant="h2">Create new agenda</Typography>
        <Box display="flex" sx={{ gap: '0.75rem' }}>
          <Button variant="text" sx={{ padding: '0.75rem' }}>
            Delete
          </Button>
          <Button variant="outlined">Publish</Button>
          <Button>Save as draft</Button>
        </Box>
      </Box>
      <Box display="flex" sx={{ gap: '2rem' }}>
        <AgendaNavigation />
        <CreateAgendaContent />
      </Box>
    </div>
  );
};

export default CreateAgendaPage;
