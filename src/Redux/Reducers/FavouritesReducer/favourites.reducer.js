import {
 ADD_FAVOURITE,
 DELETE_FAVOURITE
} from '../../Actions/FavouritesActions/favourites.actions'

const initalValue = []


export const favouritesReducer = (state = initalValue, action) => {
  switch (action.type){
    case ADD_FAVOURITE:{
      //Te shikohet nese paraprakisht ekziston qyteti?
      return [...state, action.payload]
    }
    case DELETE_FAVOURITE:{
      return state.filter((favourite) => {
        return favourite.cityId !== action.payload
      })
    }
    default: {
      return state
    }
  }
}