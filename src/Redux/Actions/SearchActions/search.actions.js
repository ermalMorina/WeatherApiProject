import axios from 'axios'

export const NOT_FOUND = 'NOT_FOUND'
export const FOUND = 'FOUND'

const API_KEY = '57c1103bbb6e8998bace85065427aaad'
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'

export const search = (cityName) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`)
      const { cod  } = response.data
      if (cod === 200){
        //U gjet qyteti
        const { data } = response
        const weatherData = {
          name: data.name,
          temp: data.main.temp,
          cityId: data.id,
          icon: data.weather[0].icon
        }
  
        dispatch({
          type: FOUND,
          payload: weatherData
        })
      }
    } catch (e) {
      dispatch({
        type: NOT_FOUND
      })
    }
  }
}