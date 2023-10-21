import React from 'react';
import { styled } from '@mui/material';
import Chip from '@mui/material/Chip';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';

const StyledChip = styled(Chip)(({ theme }) => ({
  borderColor: theme.palette.text.primary,
  '& .MuiChip-label': {
    fontWeight: 500,
  },
  '& .MuiChip-deleteIcon': {
    color: theme.palette.text.primary,
    width: '18px',
    height: '18px',
  },
}));

type UserChipProps = {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  isOnlyOwner?: boolean;
  // eslint-disable-next-line no-unused-vars
  handleDelete: (userId: string) => void;
};

const defaultProps = {
  isOnlyOwner: false,
};

const UserChip = ({ firstName, lastName, email, id, isOnlyOwner, handleDelete }: UserChipProps) => {
  return (
    <StyledChip
      variant="outlined"
      avatar={<AccountCircleIcon />}
      label={`${firstName} ${lastName} <${email}>`}
      onDelete={!isOnlyOwner ? () => handleDelete(id) : undefined}
      deleteIcon={<CloseIcon />}
    ></StyledChip>
  );
};

UserChip.defaultProps = defaultProps;

export default UserChip;
