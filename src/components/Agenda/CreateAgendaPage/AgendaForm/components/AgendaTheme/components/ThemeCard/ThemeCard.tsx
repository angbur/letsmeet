import React from 'react';
import { styled } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardMedia';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import routes from '@components/App/routing/routes';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '22.5rem',
  boxShadow: 'none',
  border: '1px solid #CAC4D0',
  borderRadius: '12px',
  background: theme.palette.secondary.light,
}));

type ThemeCardProps = {
  themeName: string;
  themeImage: string;
  applied: boolean;
  // eslint-disable-next-line no-unused-vars
  handleAppliedTheme: (newTheme: string) => void;
};

const ThemeCard = ({ themeName, themeImage, applied, handleAppliedTheme }: ThemeCardProps) => {
  const navigate = useNavigate();

  return (
    <StyledCard>
      <CardHeader sx={{ padding: '1rem' }}>
        <Typography variant="h4" sx={{ fontWeight: 500 }}>
          {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
        </Typography>
      </CardHeader>
      <CardMedia sx={{ height: '125px' }} image={`/assets/images/themes/${themeImage}`} title={themeName}></CardMedia>
      <CardActions sx={{ padding: '1rem', justifyContent: 'flex-end' }}>
        <Button onClick={() => navigate(`${routes.previewAgenda}/?theme=${themeName}`)} variant="outlined">
          Preview
        </Button>
        <Button disabled={applied} onClick={() => handleAppliedTheme(themeName)}>
          {applied ? 'Applied' : 'Use'}
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default ThemeCard;
