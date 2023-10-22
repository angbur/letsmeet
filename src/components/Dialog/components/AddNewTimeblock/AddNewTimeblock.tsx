import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const AddNewTimeblock = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" width="100%" flexDirection="column">
      <Typography variant="h3">Add new timeblock</Typography>
      <TextField
        error={false}
        id="timeblock-title-field"
        label="Title of timeblock"
        helperText="Max. 80 characters"
        placeholder="Insert title here"
        required
      />
    </Box>
  );
};

export default AddNewTimeblock;
