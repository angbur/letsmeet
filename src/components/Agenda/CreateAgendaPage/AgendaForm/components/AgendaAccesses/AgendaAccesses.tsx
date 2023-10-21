import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { Theme } from '@mui/material/styles';
import styled from '@mui/material/styles/styled';

const AgendaAccesses = () => {
  const { palette } = useTheme();
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
      <StyledFormSectionTitle variant={'h5'} palette={palette} mb={4}>
        Co-organisers
      </StyledFormSectionTitle>
      <StyledFormSectionTitle variant={'h5'} palette={palette} mb={4}>
        Viewers
      </StyledFormSectionTitle>
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
}));
