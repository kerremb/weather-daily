import React from 'react'
import Data from "../../data/cities.json"
import { useSelector } from 'react-redux'
import EachCity from './eachCity';
import { Col, Container, Row } from 'react-bootstrap';


function Cities() {

    const city = useSelector((state)=>state.searchValue.value)

    return (
<Container>
    <Row className='mb-5'>

{Data.filter((item) => {
    return city.toLocaleLowerCase("tr") === "" ? item : item.il.toLocaleLowerCase("tr").includes(city)
}).map((item, index)=>(
    <Col key={index} xl="2" lg="3" md="4" sm="6" xs="12">
    <EachCity cityName={item.il}  cityCode={item.plaka}/>
            </Col>
    ) )
    
}
    
        </Row>
    </Container>
    
  )
}

export default Cities