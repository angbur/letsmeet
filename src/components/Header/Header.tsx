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
    <AppBar position="static" color="secondary">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <img src="/assets/images/Capgemini_Logo_standard.svg" alt="Capgemini logo" height={64} />
        </Box>
        <Typography variant="h1">Let&apos;s Meet</Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h6" component="div">
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
