import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Header = () => {
  const { palette } = useTheme();

  return (
    <AppBar position="static" sx={{ backgroundColor: palette.secondary.light }} elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center" justifyContent="center" sx={{ display: { xs: 'none', sm: 'block' } }}>
          <img src="/assets/images/cap_logo_standard.svg" alt="Capgemini logo" height={64} />
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" gap="0.5rem">
          <img src="/assets/icons/logo_icon.svg" alt="" height={36} />
          <Typography variant="h1" color="primary">
            let&apos;s meet
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h6" component="div" sx={{ fontSize: { xs: '0.6rem', sm: '0.8rem' } }}>
            Logged as Ania Kowalska
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => null}
            style={{ color: `${palette.primary.dark}` }}
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
