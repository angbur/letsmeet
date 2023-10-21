import React, { useState } from 'react';
import Box from '@mui/material/Box';
import styled from '@mui/material/styles/styled';
import { useTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Switch, { SwitchProps } from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { visits } from '@store/agendaSlice';
import type { Moment } from 'moment';
import moment from 'moment';

const GeneralOptions = () => {
  const { palette } = useTheme();
  const visitsTypes = visits.map((visit) => visit.charAt(0).toUpperCase() + visit.slice(1));
  const [startDate, setStartDate] = useState<Moment | null>(moment(new Date()));
  const [endDate, setEndDate] = useState<Moment | null>(moment(new Date()));
  const [german, setGerman] = useState<boolean>(true);
  const [polish, setPolish] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'german') {
      setGerman((prev) => !prev);
    }
    if (event.target.value === 'polish') {
      setPolish((prev) => !prev);
    }
  };

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
      alignItems={'start'}
      width={'100%'}
      gap={'2rem'}
    >
      <StyledFormSectionTitle variant={'h5'} palette={palette} mb={4}>
        Details
      </StyledFormSectionTitle>
      <Box display={'flex'} flexDirection={'column'} mb={8} width={'100%'} gap={'2rem'}>
        <TextField
          id="visit-type-field"
          select
          label="Type of visit"
          required
          defaultValue={visitsTypes[0]}
          sx={{ width: '80%' }}
          SelectProps={{
            native: true,
          }}
        >
          {visitsTypes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TextField>
        <TextField
          error={false}
          id="event-name-field"
          label="Name of the event"
          helperText="Max. 80 characters"
          placeholder="Insert event name here"
          required
          sx={{ width: '80%' }}
        />
        <TextField
          id="description-field"
          label="Description"
          required
          multiline
          rows={4}
          placeholder="Insert description here"
          helperText={'Max. 140 characters'}
          sx={{ width: '80%' }}
        />
        <TextField
          error={false}
          id="link-field"
          defaultValue={'htttp://example.link.543965743678345.com'}
          label="Link"
          required
          disabled
          sx={{ width: '80%' }}
        />
      </Box>
      <StyledFormSectionTitle variant={'h5'} palette={palette} mb={2}>
        Dates
      </StyledFormSectionTitle>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Multiday event" />
      <Box display={'flex'} gap={'1rem'} mb={8}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Box display={'flex'} flexDirection={'column'}>
            <DatePicker
              label="Start date"
              format="DD/MM/YYYY"
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
            />
            <Typography variant="caption" color={palette.dark.main} py={0.5} px={2}>
              DD/MM/YYYY
            </Typography>
          </Box>
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Box display={'flex'} flexDirection={'column'}>
            <DatePicker
              label="End date"
              format="DD/MM/YYYY"
              value={endDate}
              onChange={(newValue) => setEndDate(newValue)}
            />
            <Typography variant="caption" color={palette.dark.main} py={0.5} px={2}>
              DD/MM/YYYY
            </Typography>
          </Box>
        </LocalizationProvider>
      </Box>
      <StyledFormSectionTitle variant={'h5'} palette={palette} mb={4}>
        Languages
      </StyledFormSectionTitle>
      <Typography>Translation can be done in the Step 3 - Language Section</Typography>
      <Box display={'flex'} flexDirection={'column'} mb={8} width={'100%'} gap={'2rem'}>
        <FormGroup sx={{ gap: '1rem', padding: '1rem' }}>
          <FormControlLabel
            sx={{ gap: '1rem' }}
            control={
              <StyledSwitch
                checked={german}
                value="german"
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label="Add German variant to the agenda"
          />
          <FormControlLabel
            sx={{ gap: '1rem' }}
            control={
              <StyledSwitch
                checked={polish}
                value="polish"
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label="Add Polish variant to the agenda"
          />
        </FormGroup>
      </Box>
      <Box display={'flex'} flexDirection={'column'} mb={8} width={'100%'} gap={'2rem'}>
        <StyledFormSectionTitle variant={'h5'} palette={palette} mb={1}>
          Privacy
        </StyledFormSectionTitle>
        <FormControlLabel
          control={<Checkbox />}
          label="Hide this agenda from the ‘All agendas’ list. Agenda will be seen only by the ownera and co-org."
        />
      </Box>
    </Box>
  );
};

export default GeneralOptions;

export const StyledFormSectionTitle = styled(Typography)<Pick<Theme, 'palette'>>(({ palette }) => ({
  color: palette.dark.main,
  fontSize: '0.9rem',
  fontWeight: 500,
  lineHeight: '142%',
  letterSpacing: '0.1px',
  textTransform: 'uppercase',
  width: '100%',
  borderTop: `1px solid ${palette.dark.main}`,
  paddingTop: '0.5rem',
}));

const StyledSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.main,
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: theme.palette.primary.main,
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));
