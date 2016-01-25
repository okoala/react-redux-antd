import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../store/actions'
import { Link } from 'react-router'

import './Nodebar.less'

@connect(
  state => ({...state}),
  dispatch => bindActionCreators(Action, dispatch)
)
export default class Nodebar extends React.Component {
  constructor () {
    super()

    this.state = {
      currentIndex: 0,
      tabs: [
        {
          tabTitle: '技术',
          tabName: 'tech'
        },
        {
          tabTitle: 'Apple',
          tabName: 'apple'
        },
        {
          tabTitle: '酷工作',
          tabName: 'jobs'
        },
        {
          tabTitle: '交易',
          tabName: 'deals'
        },
        {
          tabTitle: '问与答',
          tabName: 'qna'
        },
        {
          tabTitle: '最热',
          tabName: 'hot'
        },
        {
          tabTitle: '全部',
          tabName: 'latest'
        }
      ]
    }
  }

  componentWillMount () {
    this.loadData()
  }

  loadData (index = 0, e) {
    const self = this

    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }

    const tabName = index ? this.state.tabs[index].tabName : (this.props.router.location.query.tab || 'tech')
    this.state.tabs.forEach((item, index) => {
      if (item.tabName === tabName) {
        self.setState({currentIndex: index})
        // 根据tabName获取数据，最新和最热进行特殊处理
        switch(tabName) {
          case 'latest':
            self.props.getTopicsLatest()
            break
          case 'hot':
            self.props.getTopicsHot()
            break
          default:
            self.props.getTopicByNodeName(tabName)
        }
      }
    })
  }

  render () {
    return (
      <div className="c-nodebar">
        {this.state.tabs.map((item, index) => {
          let activeClass = 'tab'
          if (index === this.state.currentIndex) {
            activeClass = 'tab_current'
          }
          return <Link key={index} to={{pathname: '/', query: {tab: item.tabName}}} className={activeClass} onClick={this.loadData.bind(this, index)}>{item.tabTitle}</Link>
        })}
      </div>
    )
  }
}
