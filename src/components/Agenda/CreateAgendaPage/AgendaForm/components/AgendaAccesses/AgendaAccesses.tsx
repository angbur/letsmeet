import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { Theme } from '@mui/material/styles';
import styled from '@mui/material/styles/styled';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { openDialog } from '@store/dialogSlice';
import { useDispatch } from 'react-redux';

const AgendaAccesses = () => {
  const dispatch = useDispatch();
  const { palette } = useTheme();

  const handleAddNew = () => dispatch(openDialog('addRole'));

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
      alignItems={'start'}
      width={'100%'}
      gap={'2rem'}
    >
      <StyledFormSectionTitle variant={'h5'} palette={palette} mb={4}>
        Owners
      </StyledFormSectionTitle>
      <Button variant="text" color="primary" startIcon={<AddIcon />} onClick={handleAddNew}>
        Add owner
      </Button>
      <StyledFormSectionTitle variant={'h5'} palette={palette} mb={4}>
        Co-organisers
      </StyledFormSectionTitle>
      <Button variant="text" color="primary" startIcon={<AddIcon />} onClick={handleAddNew}>
        Add co-organiser
      </Button>
      <StyledFormSectionTitle variant={'h5'} palette={palette} mb={4}>
        Viewers
      </StyledFormSectionTitle>
      <Button variant="text" color="primary" startIcon={<AddIcon />} onClick={handleAddNew}>
        Add viewer
      </Button>
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
