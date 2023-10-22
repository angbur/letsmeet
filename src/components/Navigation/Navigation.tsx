import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import CircleIcon from '@mui/icons-material/Circle';
import Divider from '@mui/material/Divider';
import routes from '@components/App/routing/routes';
import { useLocation, useNavigate } from 'react-router-dom';

const Circle = styled(CircleIcon)({
  paddingRight: '0.75rem',
  color: 'black',
});

const Navigation = () => {
  const { palette } = useTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const navigationLabels = {
    homepage: 'Home page',
    newAgenda: 'Add new agenda',
    myAgendas: 'My agendas',
    allAgendas: 'All agendas',
  };
  const supportLabels = ['Get help', 'Report a bug', 'Reported issues history'];

  return (
    <Box
      sx={{
        backgroundColor: palette.secondary.light,
        padding: '0.75rem',
        marginTop: '2px',
        borderRadius: '16px',
        width: '270px',
      }}
    >
      <Typography variant="h6" sx={{ padding: '1.125rem 1rem' }}>
        Navigation
      </Typography>
      <List
        sx={{
          '&& .Mui-selected, && .Mui-selected:hover': {
            bgcolor: palette.secondary.main,
          },
          '& .MuiListItemButton-root:hover': {
            bgcolor: `${palette.secondary.main}70`,
          },
        }}
      >
        {Object.keys(routes).map((route) => (
          <ListItemButton
            selected={routes[route] === pathname}
            onClick={() => navigate(routes[route])}
            key={route}
            disableRipple
          >
            <Circle />
            <Typography variant="h6">{navigationLabels[route]}</Typography>
          </ListItemButton>
        ))}
      </List>
      <Divider sx={{ marginTop: '0.5rem' }} />
      <Typography variant="h6" sx={{ padding: '1.125rem 1rem' }}>
        Support
      </Typography>
      <List
        sx={{
          '&& .Mui-selected, && .Mui-selected:hover': {
            bgcolor: palette.secondary.main,
          },
          '& .MuiListItemButton-root:hover': {
            bgcolor: `${palette.secondary.main}70`,
          },
        }}
      >
        {supportLabels.map((item) => (
          <ListItemButton key={item}>
            <Circle />
            <Typography variant="h6">{item}</Typography>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Navigation;
