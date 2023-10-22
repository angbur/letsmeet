import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import styled from '@mui/material/styles/styled';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const PreviewAgendaPage = () => {
  const { palette } = useTheme();
  const days: string[] = ['16.03.2023', '17.03.2023'];

  const [tab, setTab] = useState(days[0]);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => setTab(newValue);

  const StyledTabs = styled(Tabs)({
    '& .MuiTabs-flexContainer ': {
      display: 'flex',
      justifyContent: 'space-around',
    },
  });

  return (
    <div
      style={{
        padding: '2rem',
        margin: 'auto',
        backgroundColor: palette.primary.light,
        minHeight: '100vh',
        zIndex: 100,
        width: '50%',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Nazwa eventu z backa</h2>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem' }}>
          If you have any question
          <Button variant="outlined">Contact us</Button>
          <Button>Download PDF</Button>
        </div>
      </div>
      <div style={{ gap: '0.5rem', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
        <h4>Last updated:</h4>
        <div>data z backa</div>
      </div>
      <div>
        <h4>Description</h4>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </div>
      </div>
      <div>
        <StyledTabs
          value={tab}
          onChange={handleChangeTab}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs days"
        >
          {days.map((day) => (
            <Tab key={day} label={day} value={day} />
          ))}
        </StyledTabs>
      </div>
    </div>
  );
};

export default PreviewAgendaPage;
