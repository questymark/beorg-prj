import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTranslate, IntlActions } from 'react-redux-multilingual'
import autoBind from 'react-autobind';
import { browserHistory } from 'react-router';
import { Grid, Button, Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router';
import moment from 'moment';

import { setLocaleInLocalStorage, removeTokens } from 'utils/utils';

import { welcome } from 'components/images';
import './MainLayout.css';

const getState = state => ({

});

const getActions = dispatch => bindActionCreators({
    setLocale: IntlActions.setLocale,
}, dispatch);

class MainLayout extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  setLanguage(language) {
      this.props.setLocale(language);
      setLocaleInLocalStorage(language);
  }

  logOut() {
      removeTokens();
      browserHistory.push('/signin');
  }

  renderHeader() {
      const { translate } = this.props;

      const hello = translate('header.hello');
      const language = translate('header.language');
      const logOut = translate('header.logOut');

      return (
          <Menu pointing secondary size='small' fixed='top' className='main-layout__header'>
              <Menu.Item as={Link} to='/' className="main-layout__logo">
                  <img src={welcome} alt=""/>
              </Menu.Item>
              <Menu.Item header>
                  {hello}, user
              </Menu.Item>

              <Menu.Menu position='right'>
                  <Dropdown item text={language}>
                      <Dropdown.Menu>
                          <Dropdown.Item onClick={this.setLanguage.bind(this, 'en')}>English</Dropdown.Item>
                          <Dropdown.Item onClick={this.setLanguage.bind(this, 'ru')}>Русский</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>

                  <Menu.Item>
                      <Button primary onClick={this.logOut}>{logOut}</Button>
                  </Menu.Item>
              </Menu.Menu>
          </Menu>
      )
  }

  renderMain() {
      return (
          <Grid className='main-layout__main'>
              <Grid.Column mobile={16} tablet={3} computer={3}>
                  {this.renderMenu()}
              </Grid.Column>
              <Grid.Column mobile={16} tablet={13} computer={13}>
                  <div className="main-layout__children">
                      {this.props.children}
                  </div>
              </Grid.Column>
          </Grid>
      )
  }

  renderMenu() {
      const { translate } = this.props;

      const projects = translate('menu.projects');
      const payment = translate('menu.payment');
      const exportItem = translate('menu.exportItem');
      const uploading = translate('menu.uploading');

      return (
          <Menu pointing secondary vertical fluid>
              <Menu.Item name={projects} as={Link} to='/projects' activeClassName="active" />
              <Menu.Item name={payment} as={Link} to='/payment' activeClassName="active" />
              <Menu.Item name={exportItem} as={Link} to='/export' activeClassName="active" />
              <Menu.Item name={uploading} as={Link} to='/uploading' activeClassName="active" />
          </Menu>
      )
  }

  renderFooter() {
      const currentYear = moment().year();

      return (
          <Menu fixed='bottom'>
              <Menu.Item>
                  ООО &laquo;Биорг&raquo; 2000-{currentYear} &copy;
              </Menu.Item>
          </Menu>
      )
  }

  render() {
      return (
      <div className='main-layout'>
          {this.renderHeader()}

          {this.renderMain()}

          {this.renderFooter()}
      </div>
    );
  }
}

export default connect(getState, getActions)(withTranslate(MainLayout));