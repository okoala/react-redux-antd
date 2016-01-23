import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../store/actions'
import { Icon } from 'antd'

import './Login.less'

@connect(
  state => ({}),
  dispatch => bindActionCreators(Action, dispatch)
)
export default class Login extends React.Component {
  static propTypes = {
    submit: React.PropTypes.func
  };

  constructor () {
    super()
  }

  handleSubmit (e) {
    e.preventDefault()
    e.stopPropagation()

    this.props.submit({phone: e.target.name.value, password: e.target.password.value})
  }

  render () {
    return (
      <div className="p-login">
        <div className="login-wrap">
          <div className="login-content actived">
            <form className="ant-form-inline login-form" onSubmit={::this.handleSubmit}>
              <div className="col-10 ant-form-item">
                <label htmlFor="userName" className="col-8" required>用户名：</label>
                <div className="col-14">
                  <input className="ant-input" type="text" name="name" placeholder="请输入账户名"/>
                </div>
              </div>
              <div className="col-10 ant-form-item">
                <label htmlFor="password" className="col-8" required>密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
                <div className="col-14">
                  <input className="ant-input" type="password" name="password" placeholder="请输入密码"/>
                </div>
              </div>
              <div className="col-4 ant-form-item login-submit">
                <div>
                  <input type="submit" className="login-submit-btn" value="登录" /><Icon type="circle-o-right" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

