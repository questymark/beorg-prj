import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTranslate, IntlActions } from 'react-redux-multilingual'
import { Menu, Segment, Flag } from 'semantic-ui-react'
import autoBind from 'react-autobind';
import { browserHistory } from 'react-router';

import { setLocaleInLocalStorage } from 'utils/utils';

import { welcome } from 'components/images';
import './SignPage.css';

const getState = state => ({

});

const getActions = dispatch => (
    bindActionCreators({
        setLocale: IntlActions.setLocale
    }, dispatch)
);

class SignInPage extends Component {
    constructor(props) {
        super(props);
        autoBind(this);

        const form = props.location.pathname.slice(1);

        this.state = {
            activeItem: form
        }
    }

    handleItemClick(item) {
        this.setState({
            activeItem: item
        });

        browserHistory.push(`/${item}`)
    }

    setLanguage(language) {
        this.props.setLocale(language);
        setLocaleInLocalStorage(language);
    }

    render() {
        const { activeItem } = this.state;
        const { translate } = this.props;

        const signIn = translate('forms.signIn');
        const signUp = translate('forms.signUp');

        return (
            <div className="sign">
                <div className="sign__logo">
                    <img src={welcome} alt="beorg"/>
                </div>
                <Menu pointing secondary widths='2'>
                    <Menu.Item
                        name={signIn}
                        active={activeItem === 'signin'}
                        onClick={this.handleItemClick.bind(this, 'signin')}
                    />
                    <Menu.Item
                        name={signUp}
                        active={activeItem === 'signup'}
                        onClick={this.handleItemClick.bind(this, 'signup')}
                    />
                </Menu>

                <Segment>
                    {this.props.children}
                </Segment>
                <div className="sign__languages">
                    <Flag
                        onClick={this.setLanguage.bind(this, 'ru')}
                        name='ru'
                        className="sign__flag"
                    />
                    <Flag
                        onClick={this.setLanguage.bind(this, 'en')}
                        name='us'
                        className="sign__flag"
                    />
                </div>
            </div>
        )
    }
}

export default connect(getState, getActions)(withTranslate(SignInPage));