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
import { NavLink, useLocation } from 'react-router-dom';

const NavButton = styled(ListItemButton)({
  padding: '1rem',
  borderRadius: '100px',
  margin: 0,
});

const Circle = styled(CircleIcon)({
  paddingRight: '0.75rem',
  color: 'black',
});

const Navigation = () => {
  const { palette } = useTheme();
  const { pathname } = useLocation();
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
      {console.log(pathname)}
      <Typography variant="h6" sx={{ padding: '1.125rem 1rem' }}>
        Navigation
      </Typography>
      <List sx={{ padding: 0, gap: 0 }}>
        {Object.keys(routes).map((route) => (
          <NavLink key={route} to={routes[route]} style={{ textDecoration: 'none' }}>
            <NavButton selected={routes[route] === pathname}>
              <Circle fontSize="small" />
              <Typography variant="h6">{navigationLabels[route]}</Typography>
            </NavButton>
          </NavLink>
        ))}
      </List>
      <Divider sx={{ marginTop: '0.5rem' }} />
      <Typography variant="h6" sx={{ padding: '1.125rem 1rem' }}>
        Support
      </Typography>
      <List sx={{ padding: 0, gap: 0 }}>
        {supportLabels.map((item) => (
          <NavButton key={item}>
            <Circle fontSize="small" />
            <Typography variant="h6">{item}</Typography>
          </NavButton>
        ))}
      </List>
    </Box>
  );
};

export default Navigation;
