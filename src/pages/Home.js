import React from 'react';
import { Header, Segment, Container} from 'semantic-ui-react'


export default () =>
(
  <>
  <Header as='h2' dividing> Home</Header>
  <Segment placeholder>
    <Container fluid>
      <p>Home page</p>
    </Container>
  </Segment>
  </>
);