import React from 'react';
import { Fragment } from 'react';
import Header from '@components/Header/Header';
import Box from '@mui/material/Box';
import { Route, Routes } from 'react-router-dom';
import routes from './routing/routes';
import HomePage from '@components/HomePage/HomePage';
import CreateAgendaPage from '@components/Agenda/CreateAgendaPage/CreateAgendaPage';
import AllAgendasPage from '@components/Agenda/AllAgendasPage/AllAgendasPage';
import MyAgendasPage from '@components/Agenda/MyAgendasPage/MyAgendasPage';
import MainDialog from '@components/Dialog/MainDialog';

const App = () => (
  <Fragment>
    <MainDialog />
    <Header />
    <Box sx={{ padding: '3.188rem 1.5rem 1.5rem' }}>
      <Routes>
        <Route path={routes.homepage} element={<HomePage />}></Route>
        <Route path={routes.newAgenda} element={<CreateAgendaPage />}></Route>
        <Route path={routes.myAgendas} element={<MyAgendasPage />}></Route>
        <Route path={routes.allAgendas} element={<AllAgendasPage />}></Route>
      </Routes>
    </Box>
  </Fragment>
);

export default App;
