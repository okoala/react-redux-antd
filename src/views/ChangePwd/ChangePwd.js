import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../store/actions'
import { QueueAnim, Button, message} from 'antd'
import { Link } from 'react-router'

import './ChangePwd.less'

@connect(
  state => ({}),
  dispatch => bindActionCreators(Action, dispatch)
)
export default class ChangePwdView extends React.Component {
  static propTypes = {
    changePwd: React.PropTypes.func
  };

  constructor () {
    super()
  }

  handleSubmit (e) {
    e.preventDefault()
    e.stopPropagation()

    const oldPwdEl = document.getElementById('oldPwd')
    const newPwdEl = document.getElementById('newPwd')

    if (!oldPwdEl.value) {
      message.error('请输入旧密码!')
      oldPwdEl.focus()
      return
    }

    if (!newPwdEl.value) {
      message.error('请输入新密码!')
      newPwdEl.focus()
      return
    }

    this.props.changePwd({
      oldPwd: oldPwdEl.value,
      newPwd: newPwdEl.value
    })
  }

  render () {
    return (
      <div className="p-changepwd row">
        <h3>修改密码</h3>
        <form className="ant-form-horizontal" onSubmit={::this.handleSubmit}>
          <div className="ant-form-item">
            <label className="col-6">旧密码：</label>
            <div className="col-14">
              <input type="password" id="oldPwd" name="oldPwd"  placeholder="请输入旧密码" className="ant-input"/>
            </div>
          </div>
          <div className="ant-form-item">
            <label className="col-6">新密码：</label>
            <div className="col-14">
              <input type="password" id="newPwd" name="newPwd" placeholder="请输入新密码" className="ant-input"/>
            </div>
          </div>
          <div className="row">
            <div className="col-16 col-offset-6">
              <Button type="primary" htmlType="submit">确 定</Button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
