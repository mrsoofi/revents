/** @format */

import React from 'react';
import EventListItem from './EventListItem';

const EventList = ({ events }) => {
  return (
    <>
      {events.map((event) => {
        return <EventListItem key={event.id} event={event} />;
      })}
    </>
  );
};

export default EventList;
