/** @format */
import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../feature/events/eventDashboard/EventDashboard';
import NavBar from '../../feature/Nav/NavBar';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}

export default App;
