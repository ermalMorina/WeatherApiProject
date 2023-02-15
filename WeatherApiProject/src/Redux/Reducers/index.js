import { combineReducers } from 'redux'
import { favouritesReducer } from './FavouritesReducer/favourites.reducer'
import { searchReducer } from './SearchReducer/search.reducer'

const rootReducer = combineReducers({
  search: searchReducer,
  favourites: favouritesReducer
})

export { rootReducer }