import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import type { Theme } from '@mui/material/styles';
import styled from '@mui/material/styles/styled';
import ThemeCard from './components/ThemeCard/ThemeCard';

type ThemeType = { name: string; image: string };
const themes: ThemeType[] = [
  { name: 'professional', image: 'professional.jpg' },
  { name: 'party', image: 'party.jpg' },
  { name: 'sky', image: 'sky.jpg' },
];

const AgendaTheme = () => {
  const { palette } = useTheme();
  const [appliedTheme, setAppliedTheme] = useState<null | string>(null);

  const handleAppliedTheme = (newTheme: string) => {
    setAppliedTheme(newTheme);
  };

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
      alignItems={'start'}
      width={'100%'}
      gap={'2rem'}
    >
      <Box style={{ width: '100%' }}>
        <StyledFormSectionTitle variant={'h5'} palette={palette} mb={4}>
          Theme
        </StyledFormSectionTitle>
        <Box display="flex" sx={{ gap: '1.063rem', marginBottom: '6.125rem' }} flexWrap="wrap">
          {themes.map((theme) => (
            <ThemeCard
              key={theme.name}
              themeImage={theme.image}
              themeName={theme.name}
              applied={theme.name === appliedTheme}
              handleAppliedTheme={handleAppliedTheme}
            />
          ))}
        </Box>
      </Box>
      <Box style={{ width: '100%' }}>
        <StyledFormSectionTitle variant={'h5'} palette={palette} mb={4}>
          Background
        </StyledFormSectionTitle>
        <Box display="flex" sx={{ gap: '4rem' }} alignItems="center">
          <Button variant="outlined" startIcon={<FileUploadOutlinedIcon />}>
            Upload file
          </Button>
          <Box display="flex" alignItems="center" sx={{ gap: '0.75rem' }}>
            <Typography variant="h5">image.jpg</Typography>
            <IconButton>
              <DeleteOutlineOutlinedIcon sx={{ color: 'black' }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AgendaTheme;

export const StyledFormSectionTitle = styled(Typography)<Pick<Theme, 'palette'>>(({ palette }) => ({
  color: palette.dark.main,
  fontSize: '0.9rem',
  fontWeight: 500,
  lineHeight: '142%',
  letterSpacing: '0.1px',
  width: '100%',
  borderTop: `1px solid ${palette.dark.main}`,
  textTransform: 'uppercase',
  paddingTop: '0.5rem',
}));
