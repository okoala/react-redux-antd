import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../../store/actions'
import { Link } from 'react-router'

import './Navbar.less'

@connect(
  state => ({
    shopInfo: state.auth.shopInfo
  }),
  dispatch => bindActionCreators(Action, dispatch)
)
export default class Navbar extends React.Component {
  static propTypes = {
    shopInfo: React.PropTypes.object,
    signout: React.PropTypes.func
  };

  constructor () {
    super()
  }

  render () {
    const shopInfo = this.props.shopInfo

    return (
      <div className="top-navbar">
        <div className="nav-brand">
          <h3><a href="/"></a></h3>
        </div>
        {shopInfo &&
          <div className="shop-list">
            <span>{shopInfo.shopName}</span>
          </div>
        }
        <div className="profile">
          <a href="javascript:;" onClick={this.props.signout}>退出</a>
        </div>
        <div className="profile">
          <Link to="/changePwd">修改密码</Link>
        </div>
      </div>
    )
  }
}
