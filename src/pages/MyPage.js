import React, { useState, useEffect } from 'react';
import { Header, Segment, Container, Button } from 'semantic-ui-react'

import { FetchPerson } from '../services/person'

const MyPage = () => {

  const [person, setPerson] = useState({ status: 'loading', first: '', last: '' })

  const fetchPerson = async () => {
    let response = await FetchPerson()
    setPerson(p => ({ ...p, first: response.name, status: 'ready' }));
  }


  useEffect(() => {
    fetchPerson();

    // cleanup handler
    return () => (console.log('Component removed from UI'))
  }, [])

  const greeting = (person) => {
    console.log('show greeting')
    if (person.status === 'ready') {
      return (<p>Hello {person.first}!</p>)
    } else {
      return ''
    }
  }

  return (
    <>
      <Header as='h2' dividing>My Page</Header>
      <Segment placeholder>
        <Container fluid>
          {greeting(person)}
        </Container>
      </Segment>
        <Button size='medium' onClick={fetchPerson} >Reload</Button>
    </>
  )
};

export default MyPage