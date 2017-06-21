import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTranslate, IntlActions } from 'react-redux-multilingual'
import { Menu, Segment, Flag } from 'semantic-ui-react'
import autoBind from 'react-autobind';

import SignInForm from './SignInForm';
// import SignUpForm from './SignUpForm';

import { welcome } from 'components/images';
import './SignInPage.css';

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

        this.state = {
            activeItem: 'signin'
        }
    }

    handleItemClick(item) {
        this.setState({
            activeItem: item
        })
    }

    setLanguage(language) {
        this.props.setLocale(language);
    }

    render() {
        const { activeItem } = this.state;

        return (
            <div className="sign">
                <div className="sign__logo">
                    <img src={welcome} alt="beorg"/>
                </div>
                {/*<Menu pointing secondary widths='2'>*/}
                    {/*<Menu.Item*/}
                        {/*name='Вход'*/}
                        {/*active={activeItem === 'signin'}*/}
                        {/*onClick={this.handleItemClick.bind(this, 'signin')}*/}
                    {/*/>*/}
                    {/*<Menu.Item*/}
                        {/*name='Регистрация'*/}
                        {/*active={activeItem === 'signup'}*/}
                        {/*onClick={this.handleItemClick.bind(this, 'signup')}*/}
                    {/*/>*/}
                {/*</Menu>*/}

                <Segment>
                    {activeItem === 'signin' && <SignInForm />}
                    {/*{activeItem === 'signup' && <SignUpForm />}*/}
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