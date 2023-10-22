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

type TimeblockProps = {
  timeblock: Timeblock;
  themeColor: string;
};

const PreviewTimeblock = ({ timeblock, themeColor }: TimeblockProps) => {
  const { palette } = useTheme();
  const primaryColor = themeColor ? themeColor : palette.primary.main;
  const startTime = moment(timeblock.start_time).format('HH:mm');
  const endTime = moment(timeblock.start_time).add(timeblock.duration, 'minutes').format('HH:mm');
  const [isExpanded, setIsExpanded] = useState(false);
  const timeRange = `${startTime} - ${endTime}`;

  const handleHeaderClick = (event) => event.stopPropagation();

  const handleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="start"
      width="100%"
      sx={{ background: `${palette.primary.light}`, padding: '1.5rem' }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="start"
        width="20%"
        mt={isExpanded ? '0.7rem' : 0}
        sx={{ transition: 'all 0.1s ease-out' }}
      >
        <Typography
          variant="caption"
          color={primaryColor}
          fontWeight={600}
          fontSize={'0.8rem'}
          sx={{ marginBottom: '0.5rem' }}
        >
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
                  <RemoveIcon fontSize="small" sx={{ color: primaryColor }} />
                ) : (
                  <AddIcon fontSize="small" sx={{ color: primaryColor }} />
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
                <Typography variant="caption" color={primaryColor} fontWeight={600} fontSize={'0.8rem'}>
                  {timeblock.title}
                </Typography>
                <Typography variant="caption" color="dark.light" fontWeight={400}>
                  {timeblock.type}
                </Typography>
              </Box>
            </Box>
          </StyledAccordionSummary>
          <AccordionDetails>
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
              <Link href={'#'} underline="none" sx={{ color: primaryColor }}>
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

export default PreviewTimeblock;

const StyledAccordionSummary = styled(AccordionSummary)({
  '& .MuiAccordionSummary-content': {
    margin: 0,
  },
  '& .MuiAccordionSummary-content.Mui-expanded.MuiAccordionSummary-contentGutters': {
    margin: 0,
  },
});
