/** @format */

import React from 'react';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

const EventListItem = ({ event }) => {
  const {
    hostPhotoURL,
    title,
    date,
    description,
    venue,
    hostedBy,
    attendees,
  } = event;
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image circular size='tiny' src={hostPhotoURL} />
            <Item.Content>
              <Item.Header content={title} />
              <Item.Description content={hostedBy} />
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {date}
          <Icon name='marker' /> {venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {attendees.map((attendee) => {
            return <EventListAttendee key={attendee.id} attendee={attendee} />;
          })}
        </List>
      </Segment>
      <Segment clearing>
        <span>{description}</span>
        <Button color='teal' floated='right' content='View' />
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
