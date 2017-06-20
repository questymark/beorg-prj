import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import yup from 'yup';
import { Field } from 'react-formal';
import { Button } from 'semantic-ui-react'
import i18next from 'i18next';

import { FormConstructor, InputWrapper } from 'components/Common/Forms';
import { SignInModel } from 'components/models';
import { signIn } from 'ducks/auth';

const getState = state => ({
    signed: state.auth.signed,
    signInLoading: state.auth.signInLoading,
});

const getActions = dispatch => (
    bindActionCreators({
        signIn
    }, dispatch)
);

class SignInForm extends FormConstructor {
    constructor(props) {
        super(props);

        this.schema = SignInModel;

        this.state = {
            form: this.schema.default(),
            errors: {}
        };

    }

    handleSubmit(formData) {
        console.log('submitting values:', formData);
        this.props.signIn(formData);
    }

    render() {
        const { signInLoading } = this.props;

        const username = i18next.t('form.username');
        const password = i18next.t('form.password');
        const signIn = i18next.t('form.signIn');

        return this.renderForm(
            <div className='signin-form'>
                <InputWrapper label={username} error={this.state.errors.username}>
                    <Field name='username' placeholder={username} />
                </InputWrapper>

                <InputWrapper label={password}  error={this.state.errors.password}>
                    <Field name='password' type='password' placeholder={password} />
                </InputWrapper>

                <Button
                    fluid
                    primary
                    type='submit'
                    loading={signInLoading}
                    disabled={signInLoading}
                >
                    {signIn}
                </Button>

            </div>
        );
    }
}

export default connect(getState, getActions)(SignInForm)