import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTranslate, IntlActions } from 'react-redux-multilingual'
import autoBind from 'react-autobind';
import { Link } from 'react-router';

const getState = state => ({

});

const getActions = dispatch => bindActionCreators({
    setLocale: IntlActions.setLocale
}, dispatch);

class MainPage extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  setLanguage(language) {
      this.props.setLocale(language);
  }

  render() {
      const { translate } = this.props;

      return (
      <div>
          <h1>{translate('hello_world')}</h1>
          <Link to="/signin">signin</Link>
          <div>
              <button onClick={this.setLanguage.bind(this, 'en')}>English</button>
              <button onClick={this.setLanguage.bind(this, 'ru')}>Русский</button>
          </div>
      </div>
    );
  }
}

export default connect(getState, getActions)(withTranslate(MainPage));