import React from 'react'
import { Col, Row } from 'reactstrap'
import { useSelector } from 'react-redux';
import WeatherItem from '../../Components/WeatherItem/WeatherItem'
import WeatherSearch from '../../Components/WeatherSearch/WeatherSearch'
export default function HomePage() {

  const { isFound, didSearch, weatherData } = useSelector( store => store.search )
  return (
    <div className='homePageContainer'>
      {didSearch && 
      <Row>
        {isFound ? 
          <WeatherItem weatherData={weatherData} />
          :
          <h1>Nuk u gjet qyteti</h1>
        }
      </Row>
      }
      <Row>
        <Col>
          <WeatherSearch />
        </Col>
      </Row>
      <h3 style={{ color:"white"}}>This is the my weather api project using React JS, and Redux </h3>
    </div>
    
  )
}
