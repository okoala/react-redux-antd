import React from 'react'
import { Route } from 'react-router'

import MainLayout from '../layouts/MainLayout'
import CoreLayout from '../layouts/CoreLayout'

import HomeView from '../views/Home/Home'
import NotFoundView from '../views/NotFound/NotFound'
import LoginView from '../views/Login/Login'

export default function routes(store) {
  const validate = function (nextState, replaceState, callback) {
    const isLoggedIn = !!store.getState().auth.authenticated
    if (!isLoggedIn) {
      replaceState(null, '/login')
    }
    callback()
  }

  return (
    <Route>
      <Route component={MainLayout} onEnter={validate}>
        <Route path='/' component={HomeView} />
        <Route path='/home' component={HomeView} />
      </Route>
      <Route component={CoreLayout} >
        <Route path="/login" component={LoginView} />
        <Route path="*" component={NotFoundView}/>
      </Route>
    </Route>
  );
}
