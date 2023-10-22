import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import styled from '@mui/material/styles/styled';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PreviewTimeblock from './components/PreviewTimeblock/PreviewTimeblock';

const mockTimeblock = {
  id: '423568790-8765435678-7865-timeblock-6',
  title: 'Ship IT Hackathon - Welcome Breakfast',
  description: 'Welcome breakfast and T-shirts distribution',
  location: 'Location 1',
  agenda_id: '423568790-8765435678-7865',
  start_time: '2023-10-23T08:30:00.000Z',
  duration: 60,
  type: 'other',
  presenter_id: '45678',
};

type PreviewAgendaProps = {
  themeColor?: string;
};

const PreviewAgendaPage = ({ themeColor }: PreviewAgendaProps) => {
  const { palette } = useTheme();
  const primaryColor = themeColor ? themeColor : palette.primary.main;
  const days: string[] = ['16.03.2023', '17.03.2023'];

  const [tab, setTab] = useState(days[0]);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => setTab(newValue);

  const StyledTabs = styled(Tabs)({
    '& .MuiTabs-flexContainer ': {
      display: 'flex',
      justifyContent: 'space-around',
    },
    '.MuiTab-root': { color: primaryColor },
  });

  return (
    <Box
      sx={{
        padding: '2rem',
        margin: 'auto',
        backgroundColor: palette.primary.light,
        minHeight: '100vh',
        zIndex: 100,
        width: '70%',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <Typography variant="h2">Nazwa eventu z backa</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem' }}>
          <Typography>If you have any question</Typography>
          <Button sx={{ color: primaryColor, borderColor: primaryColor }} variant="outlined">
            Contact us
          </Button>
          <Button sx={{ backgroundColor: primaryColor }}>Download PDF</Button>
        </Box>
      </Box>
      <Box
        sx={{
          gap: '0.5rem',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginBottom: '1.5rem',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 500 }}>
          Last updated:
        </Typography>
        <Box>
          <Typography>data z backa</Typography>
        </Box>
      </Box>
      <Box sx={{ marginBottom: '2.75rem' }}>
        <Typography variant="h4" sx={{ fontWeight: 500 }}>
          Description
        </Typography>
        <Box>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Typography>
        </Box>
      </Box>
      <Box>
        <StyledTabs
          value={tab}
          onChange={handleChangeTab}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs days"
          TabIndicatorProps={{
            style: {
              backgroundColor: primaryColor,
            },
          }}
        >
          {days.map((day) => (
            <Tab key={day} label={day} value={day} />
          ))}
        </StyledTabs>
      </Box>
      <PreviewTimeblock timeblock={mockTimeblock} themeColor={primaryColor} />
      <Box></Box>
    </Box>
  );
};

export default PreviewAgendaPage;
