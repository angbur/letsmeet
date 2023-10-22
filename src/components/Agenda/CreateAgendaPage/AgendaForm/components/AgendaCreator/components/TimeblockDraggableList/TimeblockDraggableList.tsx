import React from 'react';
import Box from '@mui/material/Box';
import TimeblockElement from '../TimeblockElement/TimeblockElement';
import moment, { Moment } from 'moment';

export const mockTimeblockArray = [
  {
    id: '423568790-8765435678-7865-timeblock-6',
    title: 'Ship IT Hackathon - Welcome Breakfast',
    description: 'Welcome breakfast and T-shirts distribution',
    location: 'Location 1',
    agenda_id: '423568790-8765435678-7865',
    start_time: '2023-10-23T08:30:00.000Z',
    duration: 60,
    type: 'other',
    presenter_id: '45678',
  },
  {
    id: '423568790-8765435678-7865-timeblock-7',
    title: 'Ship IT Hackathon - Official Kick-Off with Grzegorz Wołodko (NSC) and FS Representative',
    description: 'Official Kick-Off with Grzegorz Wołodko (NSC) and FS Representative (to be announced soon)',
    location: 'Location 2',
    agenda_id: '423568790-8765435678-7865',
    start_time: '2023-10-23T09:00:00.000Z',
    duration: 30,
    type: 'presentation',
    presenter_id: '45678',
  },
  {
    id: '423568790-8765435678-7865-timeblock-8',
    title: 'Ship IT Hackathon - Coding Starts',
    description: 'Coding starts',
    location: 'Location 3',
    agenda_id: '423568790-8765435678-7865',
    start_time: '2023-10-23T09:30:00.000Z',
    duration: 210,
    type: 'workshop',
    presenter_id: '45678',
  },
  {
    id: '423568790-8765435678-7865-timeblock-9',
    title: 'Ship IT Hackathon - Dinner and Networking',
    description: 'Dinner and networking',
    location: 'Location 4',
    agenda_id: '423568790-8765435678-7865',
    start_time: '2023-10-23T13:00:00.000Z',
    duration: 60,
    type: 'break',
    presenter_id: '45678',
  },
  {
    id: '423568790-8765435678-7865-timeblock-10',
    title: 'Ship IT Hackathon - Coding Continues',
    description: 'Coding continues',
    location: 'Location 5',
    agenda_id: '423568790-8765435678-7865',
    start_time: '2023-10-23T14:00:00.000Z',
    duration: 360,
    type: 'workshop',
    presenter_id: '45678',
  },
  {
    id: '423568790-8765435678-7865-timeblock-11',
    title: 'Ship IT Hackathon - Welcome Breakfast',
    description: 'Welcome breakfast',
    location: 'Location 1',
    agenda_id: '423568790-8765435678-7865',
    start_time: '2023-10-20T08:30:00.000Z',
    duration: 30,
    type: 'other',
    presenter_id: '45678',
  },
  {
    id: '423568790-8765435678-7865-timeblock-12',
    title: 'Ship IT Hackathon - Presentation of Results',
    description: 'Presentation of results',
    location: 'Location 2',
    agenda_id: '423568790-8765435678-7865',
    start_time: '2023-10-20T09:00:00.000Z',
    duration: 150,
    type: 'presentation',
    presenter_id: '45678',
  },
  {
    id: '423568790-8765435678-7865-timeblock-13',
    title: 'Ship IT Hackathon - Official Voting',
    description: 'Official voting',
    location: 'Location 3',
    agenda_id: '423568790-8765435678-7865',
    start_time: '2023-10-20T11:30:00.000Z',
    duration: 15,
    type: 'presentation',
    presenter_id: '45678',
  },
  {
    id: '423568790-8765435678-7865-timeblock-14',
    title: 'Ship IT Hackathon - Winner Announcement',
    description: 'Winner announcement',
    location: 'Location 4',
    agenda_id: '423568790-8765435678-7865',
    start_time: '2023-10-20T11:45:00.000Z',
    duration: 15,
    type: 'presentation',
    presenter_id: '45678',
  },
  {
    id: '423568790-8765435678-7865-timeblock-15',
    title: 'Ship IT Hackathon - Prize/Award Ceremony',
    description: 'Prize/Award ceremony',
    location: 'Location 5',
    agenda_id: '423568790-8765435678-7865',
    start_time: '2023-10-20T12:00:00.000Z',
    duration: 60,
    type: 'presentation',
    presenter_id: '45678',
  },
  {
    id: '423568790-8765435678-7865-timeblock-16',
    title: 'Ship IT Hackathon - Closing Networking',
    description: 'Closing networking',
    location: 'Location 5',
    agenda_id: '423568790-8765435678-7865',
    start_time: '2023-10-20T13:00:00.000Z',
    duration: 60,
    type: 'other',
    presenter_id: '45678',
  },
];

type TimeblockDraggableListProps = {
  time: Moment;
};

const TimeblockDraggableList = ({ time }: TimeblockDraggableListProps) => {
  const formattedTime = time.format('YYYY-MM-DDTHH:mm:ss.SSSSZ');
  const filteredTimeblocks = mockTimeblockArray.filter((timeblock) => {
    const timeblockStartTime = moment(timeblock.start_time);
    return timeblockStartTime.isSame(formattedTime);
  });

  return (
    <Box display="flex" flexDirection="column" width="100%" gap="0.5rem" height={0}>
      {filteredTimeblocks.map((timeblock) => (
        <TimeblockElement key={timeblock.id} timeblock={timeblock} />
      ))}
    </Box>
  );
};

export default TimeblockDraggableList;
