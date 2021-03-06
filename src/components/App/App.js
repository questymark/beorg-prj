import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import Notifications from 'react-notification-system-redux';
import moment from 'moment';

moment.locale('ru');

const getState = state => ({
    signInLoading: state.auth.signInLoading,
    signInLoaded: state.auth.signInLoaded,

    currRoute: state.common.currRoute,

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
    const { currRoute } = this.props;

    if (this.props.signInLoading && nextProps.signInLoaded) {
      browserHistory.push(currRoute);
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
