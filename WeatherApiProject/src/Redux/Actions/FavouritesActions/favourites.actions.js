export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const DELETE_FAVOURITE = 'DELETE_FAVOURITE';

export const addFav = (favourite) => {
  return {
    type: ADD_FAVOURITE,
    payload: favourite
  }
}

export const deleteFav = (cityId) => {
  return {
    type: DELETE_FAVOURITE,
    payload: cityId
  }
}