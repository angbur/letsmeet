import React, { useState } from 'react';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Avatar from '@mui/material/Avatar';

const options = [
  { firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com', id: '1' },
  { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', id: '2' },
  { firstName: 'Mary', lastName: 'Doe', email: 'mary.doe@example.com', id: '3' },
  { firstName: 'Tom', lastName: 'Doe', email: 'tom.doe@example.com', id: '4' },
  { firstName: 'Kate', lastName: 'Doe', email: 'kate.doe@example.com', id: '5' },
];

const SearchInput = styled(TextField)({
  backgroundColor: 'white',
  borderRadius: '28px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
  },
});

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.primary,
}));

type SearchBarProps = {
  // eslint-disable-next-line no-unused-vars
  handleAddUser: (user) => void;
};

const SearchBar = ({ handleAddUser }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState('');

  const getOptionLabel = (option) => `${option.firstName} ${option.lastName} <${option.email}>`;

  return (
    <Autocomplete
      value={null}
      //  newValue is one option from options array
      // I didn't type it yet because I didn't know how backend will work with users
      onChange={(event, newValue) => {
        handleAddUser(newValue);
        setInputValue('');
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      id="add-user"
      options={options}
      sx={{ width: '100%' }}
      renderInput={(params) => <SearchInput {...params} />}
      getOptionLabel={(option) => getOptionLabel(option)}
      renderOption={(props, option) => (
        <Box component="li" sx={{ gap: '1rem' }} {...props}>
          <StyledAvatar>
            {option.firstName.charAt(0)}
            {option.lastName.charAt(0)}
          </StyledAvatar>
          {getOptionLabel(option)}
        </Box>
      )}
    />
  );
};

export default SearchBar;
