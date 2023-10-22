import React from 'react';
import { useTheme } from '@mui/material/styles';

const PreviewAgendaPage = () => {
  const { palette } = useTheme();

  return (
    <div
      style={{ margin: 'auto', backgroundColor: palette.primary.light, minHeight: '100vh', zIndex: 100, width: '50%' }}
    >
      <div>
        <div>Event name</div>
        <div>Buttons area</div>
      </div>
      <div>Last updated</div>
      <div>
        <h3>Desription</h3>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </div>
      </div>
      <div>agenda plan</div>
    </div>
  );
};

export default PreviewAgendaPage;
