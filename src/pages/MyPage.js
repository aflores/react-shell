import React from 'react';
import { Header, Segment, Container} from 'semantic-ui-react'


export default () =>
(
  <>
  <Header as='h2' dividing>My Page</Header>
  <Segment placeholder>
    <Container fluid>
      <p>My Page</p>
    </Container>
  </Segment>
  </>
);