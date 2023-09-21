import React from 'react'
import slugify from 'react-slugify';

import "./city.css"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchDatas } from '../../stores/searchSlice'

function EachCity(props) {
const dispatch = useDispatch()

const dispatchEach =  () =>{
   dispatch(fetchDatas(props.cityName))
  
}

  return (
    
              <Link onClick={dispatchEach} to={`/turkey/${slugify(props.cityName)}`}>
   <div className='d-flex justify-content-between eachCity mb-4'>
                <span >
{props.cityCode}

    </span>
    <span>

    {props.cityName}
    </span>
   </div>
    </Link>

    
  )
}

export default EachCity