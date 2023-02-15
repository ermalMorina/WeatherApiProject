import React from 'react'
import {
  Col, 
  Row,
  Button,
} from 'reactstrap'
import { useDispatch } from 'react-redux';
import { addFav, deleteFav } from '../../Redux/Actions/FavouritesActions/favourites.actions'
// import '../WeatherItem/StyleWeatherItem.css'
import './StyleWeatherItem.css'
export default function WeatherItem(props) {
  const { isFavourite } = props
  const { name, temp, cityId, icon} = props.weatherData
  const dispatch = useDispatch()

  const handleSaveFav = () => {
    dispatch(addFav(props.weatherData))
  }

  const handleDelete = () => {
    dispatch(deleteFav(cityId))
  }

  return (
    <div className='borderBox'>
      <Row>
      <Col md="3">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
      </Col>
      <Col md="6">
        <h1> {name} : {temp} C </h1>
      </Col>
      <Col md="3">
        { isFavourite ? 
          <Button onClick={handleDelete} color="danger">Fshij prej Favoruites</Button>
          :
          <Button onClick={handleSaveFav} color="primary">Ruaj tek favoritet</Button>
        }
      </Col>
    </Row>
    </div>
    
  )
}

WeatherItem.defaultProps = {
  weatherData: {
    name: "",
    temp: 0,
    cityId: null,
    icon: '10d'
  }
}