import React from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CopyLinkAction = () => {
  const { palette } = useTheme();
  return (
    <Button variant="text" sx={{ color: palette.secondary.main }}>
      Copy link
    </Button>
  );
};

export default CopyLinkAction;
