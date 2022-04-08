import React from 'react'
import { Route, Switch } from 'react-router-dom'
import FavouritesPage from './Pages/FavouritesPage/FavouritesPage'
import HomePage from './Pages/HomePage/HomePage'

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/favourites" >
          <FavouritesPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  )
}
