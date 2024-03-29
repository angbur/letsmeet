import React from 'react';
import { Fragment } from 'react';
import Header from '@components/Header/Header';
import Box from '@mui/material/Box';
import { Outlet, Route, Routes, createBrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import routes from './routing/routes';
import HomePage from '@components/HomePage/HomePage';
import CreateAgendaPage from '@components/Agenda/CreateAgendaPage/CreateAgendaPage';
import AllAgendasPage from '@components/Agenda/AllAgendasPage/AllAgendasPage';
import MyAgendasPage from '@components/Agenda/MyAgendasPage/MyAgendasPage';
import PreviewAgendaPage from '@components/Agenda/PreviewAgendaPage/PreviewAgendaPage';
import MainDialog from '@components/Dialog/MainDialog';
import Toast from '@components/Toast/Toast';

const App = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const theme = queryParams.get('theme');
  const isPreview = location.pathname.includes('preview');
  const isAgendaView = location.pathname.includes('agenda-view');

  const setBackgroundImage = (theme) => {
    if (!isPreview && !isAgendaView) {
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
    } else {
      return `url('/assets/images/themes/party.jpg')`;
    }
  };

  const setThemeColor = (theme) => {
    switch (theme) {
      case 'professional':
        return '#0B1AA1';
      case 'party':
        return '#415F91';
      case 'sky':
        return '#365E9F';
      default:
        return '';
    }
  };

  return (
    <Fragment>
      <MainDialog />
      <Toast />
      <Header />
      <Box
        p={2}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        width={'100%'}
        sx={{ backgroundImage: setBackgroundImage(theme) }}
      >
        <Routes>
          <Route path={routes.homepage} element={<HomePage />}></Route>
          <Route path={routes.previewAgenda} element={<PreviewAgendaPage />}></Route>
          <Route path={routes.newAgenda} element={<CreateAgendaPage />}></Route>
          <Route path={routes.myAgendas} element={<MyAgendasPage />}></Route>
          <Route path={routes.allAgendas} element={<AllAgendasPage />}></Route>
          <Route path="*" element={<HomePage />}></Route>
        </Routes>
      </Box>
    </Fragment>
  );
};

export default App;
