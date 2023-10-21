import React from 'react';
import Box from '@mui/material/Box';
import Navigation from '@components/Navigation/Navigation';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import AgendaList from '@components/Agenda/AgendaList/AgendaList';
import { useNavigate } from 'react-router-dom';
import routes from '@components/App/routing/routes';
import useAgendasList from 'src/hooks/useAgendasList';

const HomePage = () => {
  const navigate = useNavigate();
  const { agendasList, error, isLoading } = useAgendasList({ numberOfAgendas: 5 });

  return (
    <Box display="flex" alignItems="baseline" style={{ gap: '3.125rem' }}>
      <Navigation />
      <Box display="flex" flexDirection="column" alignItems="start" sx={{ gap: '1.5rem', flex: 1 }}>
        <Button startIcon={<AddIcon />} onClick={() => navigate(routes.newAgenda)}>
          Add new agenda
        </Button>
        <Typography variant="h2">My recent agendas</Typography>
        <Box display="flex" justifyContent="center" sx={{ width: '100%' }}>
          {agendasList.length > 0 ? <AgendaList agendasList={agendasList} recentAgendas /> : null}
          {isLoading ? <CircularProgress /> : null}
          {error ? <Typography>An error occured. Please try again</Typography> : null}
        </Box>
        <Box display="flex" justifyContent="flex-end" sx={{ width: '100%' }}>
          <Button variant="text" onClick={() => navigate(routes.myAgendas)}>
            See all
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
