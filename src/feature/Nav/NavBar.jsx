/** @format */

import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

const NavBar = ({ setFormOpen }) => {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item>
          <img
            src='/assets/logo.png'
            alt='log'
            style={{ marginRight: '0.5rem' }}
          />
          Revent
        </Menu.Item>
        <Menu.Item name='Events' />
        <Menu.Item>
          <Button
            inverted
            positive
            content='Create Event'
            onClick={() => setFormOpen(true)}
          />
        </Menu.Item>
        <Menu.Item position='right'>
          <Button inverted basic content='Login' />
          <Button
            inverted
            basic
            content='Register'
            style={{ marginLeft: '0.5rem' }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
