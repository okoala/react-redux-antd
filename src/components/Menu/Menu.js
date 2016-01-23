import React from 'react'
import { Link } from 'react-router'
import { Affix, Icon } from 'antd'

import './Menu.less'

export default class Menu extends React.Component {

  constructor () {
    super()
  }

  render () {
    return (
      <div className="c-menu">
        <Affix>
          <div className="left-menu">
            <ul>
              <li role="presentation">
                <Link to="/home" className="title" activeClassName="active"><Icon type="home"/>首页</Link>
              </li>
            </ul>
            <div className="logo-img"></div>
          </div>
        </Affix>
      </div>
    )
  }
}
