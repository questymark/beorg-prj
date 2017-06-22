import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import i18next from 'i18next';

import { setLanguage } from 'ducks/common';

const getState = state => ({
    language: state.common.language
});

const getActions = dispatch => bindActionCreators({
    setLanguage
}, dispatch);

class MainPage extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  setLanguage(language) {
    this.props.setLanguage(language, this);
  }

  render() {
      const { language } = this.props;

      return (
      <div>
          <div>{language}</div>
          <h1>{i18next.t('hello_world')}</h1>
          <div>
              <button onClick={this.setLanguage.bind(this, 'en')}>English</button>
              <button onClick={this.setLanguage.bind(this, 'ru')}>Русский</button>
          </div>
      </div>
    );
  }
}

export default connect(getState, getActions)(MainPage);