import {
  FOUND,
  NOT_FOUND
} from '../../Actions/SearchActions/search.actions'

const initialValue = {
  didSearch: false,
  isFound: false,
  weatherData: {}
}

export const searchReducer = ( state = initialValue, action ) => {
  console.log(action)
  switch(action.type){
    case NOT_FOUND: {
      return {
        didSearch: true,
        isFound: false,
        weatherData: {}
      }
    }
    case FOUND: {
      return {
        didSearch: true,
        isFound: true,
        weatherData: action.payload
      }
    }
    default:
      return state
  }
}
