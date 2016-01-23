import React from 'react'

import '../styles/core.less'

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  };

  constructor () {
    super()
  }

  render () {
    return (
      <div className='base-container'>
        <div className='view-container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
