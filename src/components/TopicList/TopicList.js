import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../store/actions'
import { Link } from 'react-router'
import moment from 'moment'

import './TopicList.less'

@connect(
  state => ({...state}),
  dispatch => bindActionCreators(Action, dispatch)
)
export default class Nodebar extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className="c-topiclist">
        {this.props.dataSource.map((item, index) => {
          const member_href = `/member/${item.member.username}`
          return (
            <div key={index} className="item">
              <div className="head">
                <a href={member_href}><img src={item.member.avatar_normal} className="avatar"/></a>
              </div>
              <div className="body">
                <div className="item_title">
                  <a href={item.url} target="_blank">{item.content}</a>
                </div>
                <div>
                  <span className="item_time">{moment(Number(item.last_modified + '000')).startOf('hour').fromNow()}</span>
                </div>
              </div>
              <div className="footer">
                <span className="count_livid">{item.replies}</span>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
