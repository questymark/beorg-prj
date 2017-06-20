import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import { setLanguage } from 'ducks/common';

const getState = state => ({
    signInLoading: state.auth.signInLoading,
    signInLoaded: state.auth.signInLoaded,
});

const getActions = dispatch => (
    bindActionCreators({
        setLanguage
    }, dispatch)
);

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setLanguage('ru', this);
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
      </div>
    );
  }
}

export default connect(getState, getActions)(App);
