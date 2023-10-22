import React, { useState } from 'react';
import { Box } from '@mui/system';
import { IconButton, Typography } from '@mui/material';
import { Timeblock } from '@store/timeblockSlice';
import moment from 'moment';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import RoomIcon from '@mui/icons-material/Room';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import styled from '@mui/material/styles/styled';
import type { Theme } from '@mui/material/styles';

type TimeblockProps = {
  timeblock: Timeblock;
};

const TimeblockElement = ({ timeblock }: TimeblockProps) => {
  const { palette } = useTheme();
  const startTime = moment.utc(timeblock.start_time).format('HH:mm');
  const endTime = moment.utc(timeblock.start_time).add(timeblock.duration, 'minutes').local().format('HH:mm');
  const [isExpanded, setIsExpanded] = useState(false);
  const timeRange = `${startTime} - ${endTime}`;

  const handleHeaderClick = (event) => event.stopPropagation();

  const handleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="start"
      ml={8}
      p={0}
      sx={{
        background: `${palette.primary.light}`,
        position: 'relative',
        top: '-1.5rem',
        borderTop: `2px solid ${palette.primary.main}`,
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="start"
        width="20%"
        pl={1}
        pt={isExpanded ? 0 : 0.5}
        height={'100%'}
        mt={isExpanded ? '0.7rem' : 0}
        sx={{ transition: 'all 0.1s ease-out' }}
      >
        <Typography variant="caption" color="primary" fontWeight={600} fontSize={'0.8rem'}>
          {timeRange}
        </Typography>
        <Typography variant="caption" color="dark">
          {timeblock.duration} min.
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" width="100%" justifyContent="flex-start">
        <Accordion sx={{ background: 'none', boxShadow: 'none' }} expanded={isExpanded}>
          <StyledAccordionSummary
            expandIcon={
              <IconButton aria-label="delete" size="small" onClick={handleExpand}>
                {isExpanded ? (
                  <RemoveIcon fontSize="small" color="primary" />
                ) : (
                  <AddIcon fontSize="small" color="primary" />
                )}
              </IconButton>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="start"
                width="100%"
                onClick={handleHeaderClick}
              >
                <Typography variant="caption" color="primary" fontWeight={600} fontSize={'0.8rem'}>
                  {timeblock.title}
                </Typography>
                <Typography variant="caption" color="dark.light" fontWeight={400}>
                  Type of timeblock: {timeblock.type}
                </Typography>
              </Box>
              <Box display="flex" gap="0.5rem" mr={1}>
                <IconButton aria-label="delete" size="small" onClick={handleHeaderClick}>
                  <DeleteIcon fontSize="small" color="primary" />
                </IconButton>
                <IconButton aria-label="edit" size="small">
                  <EditIcon fontSize="small" color="primary" onClick={handleHeaderClick} />
                </IconButton>
              </Box>
            </Box>
          </StyledAccordionSummary>
          <AccordionDetails
            sx={{
              borderRadius: '8px',
              position: 'relative',
              zIndex: '200',
              background: `${palette.primary.light}`,
              width: '70%',
              boxShadow: ' 0 8px 8px -6px rgba(0, 0, 0, 0.1)',
              border: `2px solid ${palette.primary.main}`,
            }}
          >
            <UpwardTriangle palette={palette} />
            <Typography variant="caption" color="dark">
              <strong>Presenter</strong>: {timeblock.presenter_id}
            </Typography>
            <Box display="flex" flexDirection="column">
              <Typography variant="caption" color="dark">
                <strong>Description</strong>
              </Typography>
              <Typography variant="caption" color="dark">
                {timeblock.description}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography variant="caption" color="dark">
                <strong>Location</strong>
              </Typography>
              <Typography variant="caption" color="dark">
                {timeblock.location}
              </Typography>
            </Box>
            <Typography variant="caption" color="dark" fontWeight={500} py={1}>
              <Link href={'#'} underline="none">
                <RoomIcon fontSize="small" sx={{ position: 'relative', top: '0.2rem', marginTop: '0.5rem' }} />
                Link to Google Maps
              </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default TimeblockElement;

const StyledAccordionSummary = styled(AccordionSummary)({
  '& .MuiAccordionSummary-content': {
    margin: 0,
  },
  '& .MuiAccordionSummary-content.Mui-expanded.MuiAccordionSummary-contentGutters': {
    margin: 0,
  },
});

const UpwardTriangle = styled('div')<Pick<Theme, 'palette'>>(({ palette }) => ({
  position: 'absolute',
  top: '-10px',
  left: 'calc(10% - 10px)',
  width: 0,
  height: 0,
  borderLeft: '10px solid transparent',
  borderRight: '10px solid transparent',
  borderBottom: `10px solid ${palette.primary.main}`,
}));
