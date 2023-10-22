import React, { Fragment } from 'react';
import { Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { Moment } from 'moment';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import TimeblockDraggableList from '../../../TimeblockDraggableList/TimeblockDraggableList';
import { useDispatch } from 'react-redux';
import { openDialog } from '@store/dialogSlice';

type HourBlockProps = {
  timeString: string;
  isBusy: boolean;
  dateWithTime: Moment;
};

const HourBlock = ({ timeString, isBusy, dateWithTime }: HourBlockProps) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const [showAddButton, setShowAddButton] = React.useState(false);

  const handleAddNewTimeblock = () => dispatch(openDialog('createTimeblock'));

  return (
    <Box
      display="flex"
      alignItems="center"
      gap="4px"
      width="100%"
      flexDirection="column"
      onClick={!isBusy && handleAddNewTimeblock}
      sx={{ background: isBusy ? `${palette.primary.light}` : 'none', cursor: !isBusy ? 'pointer' : 'default' }}
      onMouseEnter={() => setShowAddButton(true)}
      onMouseLeave={() => setShowAddButton(false)}
    >
      <Box
        width="100%"
        sx={{
          borderTop: isBusy ? 'none' : '1px solid #ccc',
          height: '45px',
          color: `${palette.dark.main}`,
        }}
      >
        <Typography
          variant="caption"
          color="dark"
          fontWeight={600}
          fontSize={'0.8rem'}
          sx={{
            position: 'relative',
            top: '-10px',
            background: 'white',
            paddingRight: '30px',
            paddingBottom: '45px',
          }}
        >
          {timeString}
        </Typography>
        {!isBusy && (
          <Fragment>
            <IconButton
              aria-label="add"
              size="small"
              onClick={handleAddNewTimeblock}
              sx={{
                position: 'relative',
                top: '50%',
                left: '35%',
                transform: 'translateY(-50%)',
                background: showAddButton ? palette.primary.light : 'none',
                color: 'none',
                '&:hover': {
                  background: palette.primary.light,
                },
              }}
            >
              <AddIcon
                fontSize="small"
                sx={{
                  fill: showAddButton ? palette.primary.main : 'none',
                  '&:hover': {
                    fill: palette.primary.main,
                  },
                }}
              />
            </IconButton>
            {showAddButton ? (
              <Typography
                variant="caption"
                color="dark.light"
                fontWeight={400}
                sx={{
                  position: 'relative',
                  top: '7px',
                  left: '36%',
                }}
              >
                Add new timeblock
              </Typography>
            ) : null}
          </Fragment>
        )}
        <TimeblockDraggableList time={dateWithTime} />
      </Box>
    </Box>
  );
};

export default HourBlock;
