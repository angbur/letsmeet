import React, { PropsWithChildren } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useNavigate } from 'react-router-dom';
import routes from '@components/App/routing/routes';
import Typography from '@mui/material/Typography';

type AgendasPageTemplateProps = {
  title: string;
};

const AgendasPageTemplate = ({ title, children }: PropsWithChildren<AgendasPageTemplateProps>) => {
  const navigate = useNavigate();

  return (
    <Box>
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
        sx={{ padding: '0.5rem 0 2.813rem' }}
      >
        <Typography variant="h2">{title}</Typography>
        <Button onClick={() => navigate(routes.newAgenda)}>Create new</Button>
      </Box>
      <div>{children}</div>
    </Box>
  );
};

export default AgendasPageTemplate;
