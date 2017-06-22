import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setLanguage } from 'ducks/common';

const getState = state => ({

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

  render() {
    return (
      <div>
          {this.props.children}
      </div>
    );
  }
}

export default connect(getState, getActions)(App);
