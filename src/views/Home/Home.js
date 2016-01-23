import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../store/actions'
import { QueueAnim, Table } from 'antd'
import { Link } from 'react-router'

import './Home.less'

@connect(
  state => ({}),
  dispatch => Object.assign(bindActionCreators(Action, dispatch))
)
export default class HomeView extends React.Component {
  constructor () {
    super()
  }

  componentWillMount () {
  }

  render () {
    return (
      <div className="p-home">
        Hello World!
      </div>
    )
  }
}
