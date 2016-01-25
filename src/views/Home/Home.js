import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../store/actions'
import { QueueAnim, Table } from 'antd'
import { Link } from 'react-router'

import Nodebar from '../../components/Nodebar/Nodebar'

import './Home.less'

@connect(
  state => ({...state}),
  dispatch => bindActionCreators(Action, dispatch)
)
export default class HomeView extends React.Component {
  constructor () {
    super()
  }

  componentWillMount () {
  }

  render () {
    return (
      <div className="content">
        <Nodebar/>
        Hello World!
      </div>
    )
  }
}
