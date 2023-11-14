import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useNavigate } from 'react-router-dom';
import routes from '@components/App/routing/routes';
import Typography from '@mui/material/Typography';
import AgendaNavigation from './AgendaNavigation/AgendaNavigation';
import CreateAgendaContent from './CreateAgendaContent/CreateAgendaContent';
import { useDispatch, useSelector } from 'react-redux';
import { openDialog } from '@store/dialogSlice';
import { openToast } from '@store/toastSlice';
import { Agenda, selectEditedAgenda } from '@store/agendaSlice';
import { useCreateAgendaMutation, useUpdateAgendaMutation } from '@services/agenda/agenda';

const CreateAgendaPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const editedAgenda = useSelector(selectEditedAgenda);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { last_updated, id, ...draftAgenda } = editedAgenda;
  draftAgenda.start_date = draftAgenda.start_date ? new Date(draftAgenda.start_date).toISOString() : '';
  draftAgenda.end_date = draftAgenda.end_date ? new Date(draftAgenda.end_date).toISOString() : '';
  draftAgenda.owner_id = '1';
  const [createAgenda, resultCreate] = useCreateAgendaMutation();
  const [updateAgenda, resultUpdate] = useUpdateAgendaMutation();

  const handleDraftAgenda = async () => {
    try {
      await createAgenda(draftAgenda).unwrap();
    } catch {
      dispatch(openToast({ text: 'Error', variant: 'error' }));
    }
    if (resultCreate.isSuccess)
      dispatch(openToast({ text: 'Agenda was saved successfully as a draft', variant: 'default' }));
    if (resultCreate.isError) dispatch(openToast({ text: 'Error', variant: 'error' }));
  };

  const handleDeleteAgenda = () => dispatch(openDialog('deleteAgenda'));
  const handlePublishAgenda = async () => {
    const publishedAgenda: Omit<Agenda, 'last_updated' | 'id'> = { ...draftAgenda, status: 'PUBLISHED' };
    try {
      await updateAgenda(publishedAgenda).unwrap();
    } catch {
      dispatch(openToast({ text: 'Error', variant: 'error' }));
    }
    if (resultUpdate.isSuccess) dispatch(openToast({ text: 'Agenda was published successfully', variant: 'default' }));
    if (resultUpdate.isError) dispatch(openToast({ text: 'Error', variant: 'error' }));
  };

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
          <Button variant="text" sx={{ padding: '0.75rem' }} onClick={handleDeleteAgenda}>
            Delete
          </Button>
          <Button variant="outlined" onClick={handlePublishAgenda}>
            Publish
          </Button>
          <Button onClick={handleDraftAgenda}>Save as draft</Button>
        </Box>
      </Box>
      <Box display="flex" sx={{ gap: '2rem' }} alignItems="baseline">
        <AgendaNavigation />
        <CreateAgendaContent />
      </Box>
    </div>
  );
};

export default CreateAgendaPage;
