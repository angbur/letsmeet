/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Avatar from '@mui/material/Avatar';
import { useDispatch } from 'react-redux';
import { closeDialog } from '@store/dialogSlice';
import UserChip from '@components/Agenda/CreateAgendaPage/AgendaForm/components/UserChip/UserChip';

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

const roles = ['co-organiser', 'owner', 'viewer'] as const;

export type RoleType = (typeof roles)[number];

type AddRoleProps = {
  role: RoleType;
};

// eslint-disable-next-line no-unused-vars
const AddRole = ({ role = 'owner' }: AddRoleProps) => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeDialog());

  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleDeleteUser = (userId: string) => {
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  };

  const getOptionLabel = (option) => `${option.firstName} ${option.lastName} <${option.email}>`;

  return (
    <Box width="50rem">
      <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
        Add user
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: '2.25rem' }}>
        Search by name and surname or work e-mail
      </Typography>
      <Autocomplete
        value={null}
        onChange={(event, newValue) => {
          setUsers([...users, newValue]);
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
      <Box display="flex" flexWrap="wrap" gap="0.8rem" width="100%" sx={{ marginTop: '1.125rem' }}>
        {users.map((user) => (
          <UserChip
            key={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            id={user.id}
            email={user.email}
            handleDelete={handleDeleteUser}
          />
        ))}
      </Box>
      <DialogActions>
        <Button variant="text" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="text" onClick={handleClose}>
          Add
        </Button>
      </DialogActions>
    </Box>
  );
};

export default AddRole;
