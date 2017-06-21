import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import Notifications from 'react-notification-system-redux';

const getState = state => ({
    signInLoading: state.auth.signInLoading,
    signInLoaded: state.auth.signInLoaded,

    notifications: state.notifications
});

const getActions = dispatch => (
    bindActionCreators({

    }, dispatch)
);

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.signInLoading && nextProps.signInLoaded) {
      console.log('success sign in, redirect to /');
      browserHistory.push('/');
    }
  }

  render() {
    return (
      <div>
          {this.props.children}

          <Notifications
              notifications={this.props.notifications}
          />
      </div>
    );
  }
}

export default connect(getState, getActions)(App);
