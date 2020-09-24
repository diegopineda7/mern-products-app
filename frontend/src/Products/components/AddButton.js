import React from 'react'
import { Container, Section, Button } from 'react-bulma-components'

const AddButton = ({ onClick }) => {
  return (
    <Section>
      <Container>
        <div className='is-pulled-right'>
          <Button color='primary' onClick={onClick}>Add product</Button>
        </div>
      </Container>
    </Section>
  )
}

export default AddButton