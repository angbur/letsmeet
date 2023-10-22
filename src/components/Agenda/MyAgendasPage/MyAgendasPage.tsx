import AgendasPageTemplate from '@components/Templates/AgendasPageTemplate/AgendasPageTemplate';
import React from 'react';
import useAgendasList from 'src/hooks/useAgendasList';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import AgendaList from '@components/Agenda/AgendaList/AgendaList';

const MyAgendasPage = () => {
  const { agendasList, error, isLoading } = useAgendasList({ numberOfAgendas: 10 });

  return (
    <AgendasPageTemplate title="My agendas">
      <Box display="flex" justifyContent="center" sx={{ width: '100%' }}>
        {agendasList.length > 0 ? <AgendaList agendasList={agendasList} /> : null}
        {isLoading ? <CircularProgress /> : null}
        {error ? <Typography>An error occured. Please try again</Typography> : null}
      </Box>
    </AgendasPageTemplate>
  );
};

export default MyAgendasPage;
