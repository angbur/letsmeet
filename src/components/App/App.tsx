import React from 'react';
import { Fragment } from 'react';
import Header from '@components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import routes from './routing/routes';
import HomePage from '@components/HomePage/HomePage';
import CreateAgendaPage from '@components/Agenda/CreateAgendaPage/CreateAgendaPage';
import AllAgendasPage from '@components/Agenda/AllAgendasPage/AllAgendasPage';
import MyAgendasPage from '@components/Agenda/MyAgendasPage/MyAgendasPage';

const App = () => (
  <Fragment>
    <Header />
    <Routes>
      <Route path={routes.homepage} element={<HomePage />}></Route>
      <Route path={routes.newAgenda} element={<CreateAgendaPage />}></Route>
      <Route path={routes.myAgendas} element={<MyAgendasPage />}></Route>
      <Route path={routes.allAgendas} element={<AllAgendasPage />}></Route>
    </Routes>
  </Fragment>
);

export default App;
