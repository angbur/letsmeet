// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Typography from '@mui/material/Typography';

import { Agenda, AGENDA_STATUSES, selectEditedAgenda } from '@store/agendaSlice';
import { setDefaultAgenda } from '@store/agendaSlice';
import { openDialog } from '@store/dialogSlice';
import { openToast } from '@store/toastSlice';

import { useCreateAgendaMutation, useUpdateAgendaMutation, useGetAllAgendasQuery } from '@services/agenda/agenda';

import routes from '@components/App/routing/routes';

import AgendaNavigation from './AgendaNavigation/AgendaNavigation';
import CreateAgendaContent from './CreateAgendaContent/CreateAgendaContent';

const CreateAgendaPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const editedAgenda = useSelector(selectEditedAgenda);
  const { last_updated, ...draftAgenda } = editedAgenda;

  draftAgenda.start_date = draftAgenda.start_date ? new Date(draftAgenda.start_date).toISOString() : '';
  draftAgenda.end_date = draftAgenda.end_date ? new Date(draftAgenda.end_date).toISOString() : '';
  draftAgenda.owner_id = '1';

  const [createAgenda, resultCreate] = useCreateAgendaMutation();
  const [updateAgenda, resultUpdate] = useUpdateAgendaMutation();
  const [isSaved, setIsSaved] = useState(false);
  const { data, error, isLoading, refetch } = useGetAllAgendasQuery();
  const { data: agendas } = data;

  const selectToastMsgCreateAgenda = (resultCreate, resultUpdate) => {
    if (resultCreate.isSuccess)
      dispatch(openToast({ text: 'Agenda was saved successfully as a draft', variant: 'default' }));
    else if (resultUpdate.isSuccess)
      dispatch(openToast({ text: 'Agenda was updated successfully', variant: 'default' }));
    else dispatch(openToast({ text: 'Error', variant: 'error' }));
  };

  const handleEditDraftAgenda = () => {
    setIsSaved(false);
  };

  const checkIsExistingName = (name: string, agendas: Agenda[]): boolean => {
    return agendas.some((agenda: Agenda) => agenda.name === name);
  };

  const checkIsExistingAgenda = (id: string, agendas: Agenda[]): boolean => {
    return agendas.some((agenda: Agenda) => agenda.id === id);
  };

  const handleDraftAgenda = async () => {
    setIsSaved(true);
    const isExistingAgenda = draftAgenda.id && checkIsExistingAgenda(draftAgenda.id, agendas);
    try {
      if (isExistingAgenda) {
        await updateAgenda(draftAgenda).unwrap();
      } else {
        const isExistingAgendaName = checkIsExistingName(draftAgenda.name, agendas);
        const { id, ...newAgenda } = draftAgenda;
        !isExistingAgendaName && (await createAgenda(newAgenda).unwrap());
        refetch();
      }
    } catch {
      dispatch(openToast({ text: 'Error', variant: 'error' }));
    }
    selectToastMsgCreateAgenda(resultCreate, resultUpdate);
  };

  const handleDeleteAgenda = () => dispatch(openDialog('deleteAgenda'));

  const handlePublishAgenda = async () => {
    const publishedAgenda = { ...draftAgenda, status: AGENDA_STATUSES.PUBLISHED };
    const isExistingAgenda = publishedAgenda.id && checkIsExistingAgenda(publishedAgenda.id, agendas);

    try {
      if (isExistingAgenda) {
        await updateAgenda(publishedAgenda).unwrap();
      } else {
        const isExistingAgendaName = checkIsExistingName(publishedAgenda.name, agendas);
        const { id, ...newAgenda } = publishedAgenda;

        !isExistingAgendaName && (await createAgenda(newAgenda).unwrap());
      }
      dispatch(setDefaultAgenda());
      navigate(routes.homepage);
    } catch {
      dispatch(openToast({ text: 'Error', variant: 'error' }));
    }
    selectToastMsgCreateAgenda(resultCreate, resultUpdate);
  };

  return (
    <div>
      {draftAgenda.id}
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
          <Button variant="text" sx={{ padding: '0.75rem' }} onClick={handleDeleteAgenda}>
            Delete
          </Button>
          <Button variant="outlined" onClick={handlePublishAgenda}>
            Publish
          </Button>
          {isSaved ? (
            <Button onClick={handleEditDraftAgenda}>Edit draft</Button>
          ) : (
            <Button onClick={handleDraftAgenda}>Save as draft</Button>
          )}
        </Box>
      </Box>
      <Box display="flex" sx={{ gap: '2rem' }} alignItems="baseline">
        <AgendaNavigation />
        <CreateAgendaContent isSaved={isSaved} />
      </Box>
    </div>
  );
};

export default CreateAgendaPage;
