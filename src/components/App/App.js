import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTranslate, IntlActions } from 'react-redux-multilingual'
import { browserHistory } from 'react-router';

const getState = state => ({
    signInLoading: state.auth.signInLoading,
    signInLoaded: state.auth.signInLoaded,
});

const getActions = dispatch => (
    bindActionCreators({
        setLocale: IntlActions.setLocale,
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
      </div>
    );
  }
}

export default connect(getState, getActions)(withTranslate(App));
