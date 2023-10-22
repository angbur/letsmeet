import React, { Fragment } from 'react';
import { Moment } from 'moment';
import moment from 'moment';
import { mockTimeblockArray } from '../TimeblockDraggableList/TimeblockDraggableList';
import { DisplayedHours } from '../../AgendaCreator';
import HourBlock from './components/HourBlock/HourBlock';

type HourGridProps = {
  hourRange: DisplayedHours;
  date: Moment;
};

const HourGrid = ({ hourRange, date }: HourGridProps) => {
  const startHour = hourRange === 'Work hours (8:00 - 17:00)' ? 8 : 0;
  const endHour = hourRange === 'Work hours (8:00 - 17:00)' ? 17 : 24;

  const hours = generateHours(startHour, endHour, date);

  return <Fragment>{hours}</Fragment>;
};

const generateHours = (startHour: number, endHour: number, date: Moment) => {
  const hours = [];

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 5) {
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      const key = `${hour}-${minute}`;
      const dateWithTimeUTC = date.clone().set({ hour, minute, second: 0 }).utc();

      const isBusy = mockTimeblockArray.some(
        (timeblock) =>
          dateWithTimeUTC.isSameOrAfter(moment(timeblock.start_time).utc().utcOffset(+2, true)) &&
          dateWithTimeUTC.isBefore(moment.utc(timeblock.start_time).clone().add(timeblock.duration, 'minutes')),
      );

      hours.push(<HourBlock key={key} timeString={timeString} isBusy={isBusy} dateWithTime={dateWithTimeUTC} />);
    }
  }
  return hours;
};

export default HourGrid;
