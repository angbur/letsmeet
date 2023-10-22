import React from 'react';
import { Fragment } from 'react';
import Header from '@components/Header/Header';
import Box from '@mui/material/Box';
import { Route, Routes, useLocation } from 'react-router-dom';
import routes from './routing/routes';
import HomePage from '@components/HomePage/HomePage';
import CreateAgendaPage from '@components/Agenda/CreateAgendaPage/CreateAgendaPage';
import AllAgendasPage from '@components/Agenda/AllAgendasPage/AllAgendasPage';
import MyAgendasPage from '@components/Agenda/MyAgendasPage/MyAgendasPage';
import PreviewAgendaPage from '@components/Agenda/PreviewAgendaPage/PreviewAgendaPage';
import MainDialog from '@components/Dialog/MainDialog';

const App = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const theme = queryParams.get('theme');
  const setBackgroundImage = (theme) => {
    switch (theme) {
      case 'professional':
        return `url('/assets/images/themes/professional.jpg')`;
      case 'party':
        return `url('/assets/images/themes/party.jpg')`;
      case 'sky':
        return `url('/assets/images/themes/sky.jpg')`;
      default:
        return '';
    }
  };
  return (
    <Fragment>
      <MainDialog />
      <Header />
      <Box sx={{ backgroundImage: setBackgroundImage(theme), padding: '3.188rem 1.5rem 1.5rem' }}>
        <Routes>
          <Route path={routes.homepage} element={<HomePage />}></Route>
          <Route path={routes.newAgenda} element={<CreateAgendaPage />}></Route>
          <Route path={routes.myAgendas} element={<MyAgendasPage />}></Route>
          <Route path={routes.allAgendas} element={<AllAgendasPage />}></Route>
          <Route path={routes.previewAgenda} element={<PreviewAgendaPage />}></Route>
        </Routes>
      </Box>
    </Fragment>
  );
};

export default App;
