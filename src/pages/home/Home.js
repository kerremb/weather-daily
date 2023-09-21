import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "./home.css"
import "../../components/cities/city.css"
function Home() {
  return (
    <Container className='text-center'>
<Row className='mt-5'>
    <Col>
    
    
        <h1 className='main-title'>Seardsadsah a city</h1>
    </Col>
</Row>
<Row className='justify-content-md-center mt-5'>
    <Col md={2} xs={6}>    
        
        <Nav.Link as={NavLink} to={"/turkey"}><div className='eachCity'>Türkiye</div></Nav.Link>

        

    </Col>
    <Col md={2} xs={6}>
    
        <Nav.Link as={NavLink} to={"/world-wide"}><div className='eachCity'>World Wide</div></Nav.Link>

    </Col>
</Row>
    </Container>
  )
}

export default Home