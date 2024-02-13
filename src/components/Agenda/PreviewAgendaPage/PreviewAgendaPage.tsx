import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import styled from '@mui/material/styles/styled';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import PreviewTimeblock from './components/PreviewTimeblock/PreviewTimeblock';
import { firstDay, secondDay } from './mockTimeblocks';
import { useLocation, useParams } from 'react-router-dom';
import { useGetAgendaByIdQuery } from '@services/agenda/agenda';
import moment from 'moment';

type PreviewAgendaProps = {
  themeColor?: string;
};

const getDatesArrayFromStartDateAndEndDate = (startDate: string, endDate: string) => {
  const dates = [];
  const currDate = moment(startDate).startOf('day');
  const lastDate = moment(endDate).startOf('day');
  while (currDate.add(1, 'days').diff(lastDate) < 0) {
    dates.push(currDate.clone().format('DD.MM.YYYY'));
  }
  return dates;
};

const PreviewAgendaPage = () => {
  const themeColor = useTheme().palette.primary.main;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const { data } = useGetAgendaByIdQuery(id ?? '1');
  const { palette } = useTheme();
  const primaryColor = themeColor ? themeColor : palette.primary.main;
  const days: string[] = data
    ? getDatesArrayFromStartDateAndEndDate(data.data.start_date, data.data.end_date)
    : ['21.10.2023', '23.10.2023'];
  const [tab, setTab] = useState(days[0]);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => setTab(newValue);

  if (!data) return <CircularProgress />;

  const StyledTabs = styled(Tabs)({
    '& .MuiTabs-flexContainer ': {
      display: 'flex',
      justifyContent: 'space-around',
    },
    '.MuiTab-root': { color: primaryColor },
  });

  return (
    <Box
      p={0}
      sx={{
        backgroundColor: palette.primary.light,
        minHeight: '100vh',
        borderRadius: '12px',
        zIndex: 100,
        width: { xs: '100%', sm: '70%' },
      }}
    >
      <Box display={'flex'} flexDirection={'column'} gap={'1.5rem'} sx={{ padding: { xs: '1rem', sm: '2rem' } }}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant="h2">{data ? data.data.name : 'Title'}</Typography>
          <Box display={'flex'} gap={'1rem'} alignItems={'center'}>
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
        <Box display={'flex'} gap={'0.5rem'} alignItems={'center'} justifyContent={'flex-start'}>
          <Typography variant="h4" sx={{ fontWeight: 500 }}>
            Last updated:
          </Typography>
          <Typography>{data ? moment(data.data.start_date).format('DD.MM.YYYY') : 'Date'}</Typography>
        </Box>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 500 }}>
            Description
          </Typography>
          <Typography paragraph>{data ? data.data.description : 'Description'}</Typography>
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
        <Divider />
      </Box>
      {(tab === '21.10.2023' ? firstDay : secondDay).map((timeblock) => (
        <PreviewTimeblock key={timeblock.id} timeblock={timeblock} themeColor={primaryColor} />
      ))}
    </Box>
  );
};

export default PreviewAgendaPage;
