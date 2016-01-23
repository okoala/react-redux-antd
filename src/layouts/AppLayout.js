import React from 'react'

export default class AppLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  };

  constructor () {
    super()
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
