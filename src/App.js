import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { getMessages, getMembers } from './data.js'
import NavigationBar from './components/navigationBar'
import MembersContent from './components/membersContent'
import MessagesContent from './components/messagesContent'
import {
  setMembersActionCreator,
  setMessagesActionCreator,
  selectMembers,
  selectMessages } from './store/store'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activePage: 'member',
      error: false
    }
  }
  componentDidMount () {
    getMembers().then((result) => {
      this.props.setMembers(result);
    }).catch(err => {
      this.setState({
        error: true
      })
    });

    getMessages().then(res => {
      this.props.setMessages(res);
    }).catch(err => {
      this.setState({
        error: true
      })
    })
  }

  setActivePage = (activePage) => {
    this.setState({activePage})
  };

  renderContent = () => {
    const { activePage } = this.state;
    const { membersData, messagesData } = this.props;
    switch (activePage) {
      case 'member':
        return <MembersContent membersData={membersData.data} />;
      case 'message':
        return <MessagesContent messagesData={messagesData.data} />
    }
  };


  render () {
    if (this.state.Error) {
      return (<h1>Sorry Data Not Found Error</h1>)
    }

    return (
      <div>
        <NavigationBar setActivePage={this.setActivePage}/>
        <div className='main clear-fix'>
          {this.renderContent()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    membersData: selectMembers(state),
    messagesData: selectMessages(state)
});

const mapDispatchToProps = (dispatch) => ({
  setMembers: (res) => {
    dispatch(setMembersActionCreator(res))
  },
  setMessages: (res) => {
    dispatch(setMessagesActionCreator(res))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
