import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useDispatch } from 'react-redux';
import { openDialog } from '@store/dialogSlice';
import { useTheme } from '@mui/material/styles';
import styled from '@mui/material/styles/styled';
import TextField from '@mui/material/TextField';
import moment from 'moment';
import HourGrid from './components/HourGrid/HourGrid';

const displayedHours: string[] = ['Work hours (8:00 - 17:00)', 'All day (0:00 - 24:00)'];
export type DisplayedHours = (typeof displayedHours)[number];

type AgendaCreatorProps = {
  isSaved: boolean;
};

const AgendaCreator = ({ isSaved }: AgendaCreatorProps) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const days: string[] = ['20.10.2023', '23.10.2023'];
  const [tab, setTab] = useState(days[0]);
  const [hoursRange, setHoursRange] = useState(displayedHours[0]);
  const currentDate = moment(tab, 'DD.MM.YYYY');

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => setTab(newValue);

  const handleAddNewTimeblock = () => dispatch(openDialog('createTimeblock'));

  const handleHoursRangeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setHoursRange(event.target.value as string);
  };

  return (
    <Box display="flex" flexDirection="column" width="100%" gap="2rem">
      <Box sx={{ width: '100%', background: `${palette.primary.light}` }}>
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
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" height="fit-content" mb={2}>
        <TextField
          id="hours-range-field"
          select
          label="Displayed hours"
          defaultValue={displayedHours[0]}
          value={hoursRange}
          onChange={handleHoursRangeChange}
          SelectProps={{
            native: true,
          }}
        >
          {displayedHours.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TextField>
        <Button variant="text" color="primary" startIcon={<AddIcon />} onClick={handleAddNewTimeblock}>
          Add new timeblock
        </Button>
      </Box>
      <Box display="flex" flexDirection="row">
        <Box display="flex" flexDirection="column" width="100%">
          <HourGrid hourRange={hoursRange} date={currentDate} />
        </Box>
      </Box>
    </Box>
  );
};

export default AgendaCreator;

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-flexContainer ': {
    display: 'flex',
    justifyContent: 'space-around',
  },
});
