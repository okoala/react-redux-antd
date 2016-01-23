import React from 'react'
import { Route } from 'react-router'

import AppView from '../views/App'

import HomeView from '../views/Home/Home'
import TopicView from '../views/Topic/Topic'
import NotFoundView from '../views/NotFound/NotFound'

export default function routes(store) {
  const validate = function (nextState, replaceState, callback) {
    // 需要做权限控制的时候开启
    // const isLoggedIn = !!store.getState().auth.authenticated
    // if (!isLoggedIn) {
    //   replaceState(null, '/login')
    // }
    callback()
  }

  return (
    <Route>
      <Route component={AppView} onEnter={validate}>
        <Route path='/' component={HomeView} />
        <Route path='/t/:topicId' component={TopicView} />
      </Route>
    </Route>
  );
}
