import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const roles = ['co-organiser', 'owner', 'viewer'] as const;

export type RoleType = (typeof roles)[number];

type AddRoleProps = {
  role: RoleType;
};

const AddRole = ({ role = 'owner' }: AddRoleProps) => {
  return (
    <Box>
      <Typography variant={'h5'}>{`Add ${role}`}</Typography>
      <Typography>Search by name and surname or work e-mail</Typography>
    </Box>
  );
};

export default AddRole;
