import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { Theme } from '@mui/material/styles';
import styled from '@mui/material/styles/styled';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { openDialog } from '@store/dialogSlice';
import { useDispatch } from 'react-redux';
import UserChip from '../UserChip/UserChip';

const ownersArray = [{ firstName: 'Ania', lastName: 'Kowalska', email: 'anna.kowalska@example.com', id: '1' }];
const coorgsArray = [{ firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', id: '2' }];
const viewersArray = [];

const AgendaAccesses = () => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const [owners, setOwners] = useState(ownersArray);
  const [coorgs, setCoorgs] = useState(coorgsArray);
  const [viewers, setViewers] = useState(viewersArray);

  const handleAddNew = () => dispatch(openDialog('addRole'));

  const handleDeleteOwner = (userId: string) => {
    const newOwners = owners.filter((owner) => owner.id !== userId);
    setOwners(newOwners);
  };

  const handleDeleteCoorg = (userId: string) => {
    const newCoorgs = coorgs.filter((coorg) => coorg.id !== userId);
    setCoorgs(newCoorgs);
  };

  const handleDeleteViewer = (userId: string) => {
    const newViewers = viewers.filter((viewer) => viewer.id !== userId);
    setViewers(newViewers);
  };

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
      alignItems={'start'}
      width={'100%'}
      gap={'5rem'}
    >
      <Box width={'100%'}>
        <StyledFormSectionTitle variant={'h5'} palette={palette} mb={4}>
          Owners
        </StyledFormSectionTitle>
        <Typography variant="h5" sx={{ marginBottom: '1.4rem' }}>
          Owner can edit and delete agenda
        </Typography>
        <ChipsBox>
          {owners.map((owner) => (
            <UserChip
              key={owner.id}
              firstName={owner.firstName}
              lastName={owner.lastName}
              id={owner.id}
              email={owner.email}
              isOnlyOwner={owners.length === 1}
              handleDelete={handleDeleteOwner}
            />
          ))}
        </ChipsBox>
        <Button variant="text" color="primary" startIcon={<AddIcon />} onClick={handleAddNew}>
          Add owner
        </Button>
      </Box>
      <Box width={'100%'}>
        <StyledFormSectionTitle variant={'h5'} palette={palette} mb={4}>
          Co-organisers
        </StyledFormSectionTitle>
        <Typography variant="h5" sx={{ marginBottom: '1.4rem' }}>
          Co-organisers can edit agenda
        </Typography>
        <ChipsBox>
          {coorgs.map((coorg) => (
            <UserChip
              key={coorg.id}
              firstName={coorg.firstName}
              lastName={coorg.lastName}
              id={coorg.id}
              email={coorg.email}
              handleDelete={handleDeleteCoorg}
            />
          ))}
        </ChipsBox>
        <Button variant="text" color="primary" startIcon={<AddIcon />} onClick={handleAddNew}>
          Add co-organiser
        </Button>
      </Box>
      <Box width={'100%'}>
        <StyledFormSectionTitle variant={'h5'} palette={palette} mb={4}>
          Viewers
        </StyledFormSectionTitle>
        <Typography variant="h5" sx={{ marginBottom: '1.4rem' }}>
          Viewers can see the agenda, but cannot edit it
        </Typography>
        <ChipsBox>
          {viewers.map((viewer) => (
            <UserChip
              key={viewer.id}
              firstName={viewer.firstName}
              lastName={viewer.lastName}
              id={viewer.id}
              email={viewer.email}
              handleDelete={handleDeleteViewer}
            />
          ))}
        </ChipsBox>
        <Button variant="text" color="primary" startIcon={<AddIcon />} onClick={handleAddNew}>
          Add viewer
        </Button>
      </Box>
    </Box>
  );
};

export default AgendaAccesses;

export const StyledFormSectionTitle = styled(Typography)<Pick<Theme, 'palette'>>(({ palette }) => ({
  color: palette.dark.main,
  fontSize: '0.9rem',
  fontWeight: 500,
  lineHeight: '142%',
  letterSpacing: '0.1px',
  width: '100%',
  borderTop: `1px solid ${palette.dark.main}`,
  paddingTop: '0.5rem',
}));

const ChipsBox = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.8rem',
  width: '100%',
  marginBottom: '1rem',
});
