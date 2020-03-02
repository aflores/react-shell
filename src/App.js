import React from 'react';
import { Router, Link } from '@reach/router'
import { Segment, Container, Header, Menu } from 'semantic-ui-react'

import Home from './pages/Home';
import MyPage from './pages/MyPage';

import './App.css';

function App() {

  return (
    <Container>
      <Header as='h1'>Top Header</Header>
      <Menu>
        <Menu.Item as={Link} to='/'
          name='Home'
          // active={activeItem === 'bio'}
        />
        <Menu.Item as={Link} to='/my-page'
          name='My Page'
          // active={activeItem === 'photos'}
        />
      </Menu>

      {/* <Header as='h2' dividing> Site</Header> */}
      <Router>
        <Home path='/' />
        <MyPage path='/my-page' />
      </Router>
    </Container>
  );
}

export default App;
