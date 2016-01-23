import React from 'react'

import Navbar from '../components/Navbar/Navbar'
import Menu from '../components/Menu/Menu'

import '../styles/core.less'

export default class MainLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  };

  constructor () {
    super()
  }

  render () {
    return (
      <div className='main-container'>
        <Navbar/>
        <Menu/>
        <div className='view-container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
