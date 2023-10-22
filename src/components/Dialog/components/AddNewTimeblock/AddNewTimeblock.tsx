import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { closeDialog } from '@store/dialogSlice';
import { useForm, Controller } from 'react-hook-form';
import { BlockType, blocksTypes } from '@store/timeblockSlice';
import type { Moment } from 'moment';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

type FormData = {
  title: string;
  description?: string;
  location?: string;
  duration: number;
  type: BlockType;
  additionalInfo: string;
};

const AddNewTimeblock = () => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeDialog());
  const blocks = blocksTypes.map((block) => block.charAt(0).toUpperCase() + block.slice(1));
  const { register, handleSubmit, control } = useForm<FormData>();
  const [startTime, setStartTime] = useState<Moment | null>(null);

  const onSubmit = (data: FormData) => {
    try {
      console.log(data);
      // startTime in state
      dispatch(closeDialog());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box width="55rem">
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        sx={{ marginBottom: '2rem' }}
        alignItems="baseline"
      >
        <Typography variant="h3">Add new time block</Typography>
        <IconButton>
          <CloseIcon onClick={handleClose} />
        </IconButton>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        gap="1rem"
        width="100%"
      >
        <Box display="flex" width="100%" gap="2%">
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <TimePicker
              label="Start time*"
              value={startTime}
              onChange={(newValue) => setStartTime(newValue)}
              sx={{ width: '40%' }}
            />
          </LocalizationProvider>
          <Controller
            name="duration"
            defaultValue={null}
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                error={!!error}
                onChange={onChange}
                value={value}
                type="number"
                sx={{ width: '23%' }}
                placeholder="ex. 15"
                helperText={'Only numerical values, in minutes'}
                label="Duration*"
              />
            )}
          />
        </Box>
        <Controller
          name="type"
          defaultValue={blocks[0]}
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              select
              label="Timeblock type*"
              sx={{ width: '65%' }}
              error={!!error}
              onChange={onChange}
              value={value}
              SelectProps={{
                native: true,
              }}
            >
              {blocks.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>
          )}
        />
        <Box display="flex" width="100%" gap="0.75rem" flexDirection="column" alignItems="flex-start">
          <Typography sx={{ fontSize: '0.75rem', paddingLeft: '1rem' }}>Presenter</Typography>
          <Button variant="text" startIcon={<AddIcon />}>
            Add presenter
          </Button>
        </Box>
        <Controller
          name="title"
          defaultValue={''}
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              error={!!error}
              onChange={onChange}
              value={value}
              sx={{ width: '65%' }}
              placeholder="Insert title here"
              helperText={'Max. 80 characters'}
              label="Title of timeblock*"
            />
          )}
        />
        <TextField
          id="description"
          label="Description"
          multiline
          rows={3}
          placeholder="Insert description here"
          helperText={'Max. 140 characters'}
          sx={{ width: '65%' }}
          {...register('description')}
        />
        <Box display="flex" gap="2.4rem">
          <Box width="65%" display="flex" flexDirection="column" gap="1rem">
            <TextField
              id="location"
              label="Location"
              placeholder="Insert here the location to link Google Map location"
              fullWidth
              {...register('location')}
            />
            <TextField
              id="additionalInfo"
              label="Additional location information"
              placeholder="Insert information here"
              helperText={'Max. 80 characters'}
              fullWidth
              {...register('additionalInfo')}
            />
          </Box>
          <Box>map</Box>
        </Box>
        <DialogActions>
          <Button variant="text" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="text" type="submit">
            Add
          </Button>
        </DialogActions>
      </Box>
    </Box>
  );
};

export default AddNewTimeblock;
