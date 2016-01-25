import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../store/actions'

import Navbar from '../components/Navbar/Navbar'

import '../styles/core.less'

@connect(
  state => ({...state}),
  dispatch => bindActionCreators(Action, dispatch)
)
export default class MainLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  };

  constructor () {
    super()
  }

  componentWillMount () {
    this.props.getSiteInfo()
    this.props.getSiteStats()
  }

  render () {
    return (
      <div className='main-container'>
        <Navbar/>
        <div className="main-wrapper">
          {this.props.children}
        </div>
      </div>
    )
  }
}
