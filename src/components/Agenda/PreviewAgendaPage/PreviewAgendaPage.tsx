import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import styled from '@mui/material/styles/styled';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PreviewTimeblock from './components/PreviewTimeblock/PreviewTimeblock';
import { firstDay, secondDay } from './mockTimeblocks';

type PreviewAgendaProps = {
  themeColor?: string;
};

const PreviewAgendaPage = ({ themeColor }: PreviewAgendaProps) => {
  const { palette } = useTheme();
  const primaryColor = themeColor ? themeColor : palette.primary.main;
  const days: string[] = ['20.10.2023', '23.10.2023'];

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
        width: { xs: '100%', sm: '70%' },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <Typography variant="h2">Ship IT Hackathon</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '1rem',
            margin: { xs: '0', sm: '1rem' },
            padding: { xs: '0', sm: '1rem' },
          }}
        >
          <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>If you have any question</Typography>
          <Button
            sx={{ color: primaryColor, borderColor: primaryColor, display: { xs: 'none', sm: 'block' } }}
            variant="outlined"
          >
            Contact us
          </Button>
          <Button sx={{ backgroundColor: primaryColor, display: { xs: 'none', sm: 'block' } }}>Download PDF</Button>
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
          <Typography>19.10.2023</Typography>
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
      {tab === '20.10.2023'
        ? firstDay.map((timeblock) => (
            <PreviewTimeblock key={timeblock.id} timeblock={timeblock} themeColor={primaryColor} />
          ))
        : secondDay.map((timeblock) => (
            <PreviewTimeblock key={timeblock.id} timeblock={timeblock} themeColor={primaryColor} />
          ))}
      <Box></Box>
    </Box>
  );
};

export default PreviewAgendaPage;
