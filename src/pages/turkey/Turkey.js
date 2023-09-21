import React from 'react'
import SearchBar from '../../components/search/searchBar'
import Cities from '../../components/cities'
import { Col, Container, Row } from 'react-bootstrap'

function Forecast() {
  return (
    <Container>
<Row className='justify-content-md-center forecast-row'>
<Col md="6">

    <SearchBar/>
</Col>
</Row>
<Row>
  <Col>
  
  
    <Cities/>
  </Col>
</Row>
    </Container>
    
  )
}

export default Forecast