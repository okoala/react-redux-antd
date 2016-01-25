import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './Navbar.less'

export default class Navbar extends React.Component {
  constructor () {
    super()
  }

  render () {
    const shopInfo = this.props.shopInfo

    return (
      <div className="c-navbar">
        <div className="content">
          <h1>V2EX</h1>
        </div>
      </div>
    )
  }
}
