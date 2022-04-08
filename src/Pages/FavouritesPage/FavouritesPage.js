import React from 'react'
import { Row } from 'reactstrap'
import { useSelector } from 'react-redux'
import WeatherItem from '../../Components/WeatherItem/WeatherItem';

export default function FavouritesPage() {

  const favourites = useSelector(state => state.favourites)

  return (
    <div>
      {favourites.map(favourite => (
        <Row key={favourite.cityId}>
          <WeatherItem isFavourite weatherData={favourite} />
        </Row>
      ))}
    </div>
  )
}
