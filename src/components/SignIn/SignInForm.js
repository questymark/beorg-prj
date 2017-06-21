import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTranslate, IntlActions } from 'react-redux-multilingual'
import { Field } from 'react-formal';

import { FormConstructor, InputWrapper, SubmitButton } from 'components/Common/Forms';
import SignInModel from 'models/SignInModel';
import { signIn } from 'ducks/auth';

const getState = state => ({
    signed: state.auth.signed,
    signInLoading: state.auth.signInLoading,
});

const getActions = dispatch => (
    bindActionCreators({
        setLocale: IntlActions.setLocale,
        signIn
    }, dispatch)
);

class SignInForm extends FormConstructor {
    constructor(props) {
        super(props);

        this.schema = SignInModel(props.translate);

        this.state = {
            form: this.schema.default(),
            errors: {}
        };

    }

    handleSubmit(formData) {
        this.props.signIn(formData);
    }

    render() {
        const { signInLoading, translate } = this.props;

        const username = translate('form.username');
        const password = translate('form.password');
        const signIn = translate('form.signIn');

        return this.renderForm(
            <div className='signin-form'>
                <InputWrapper label={username} error={this.state.errors.username}>
                    <Field name='username' placeholder={username} />
                </InputWrapper>

                <InputWrapper label={password}  error={this.state.errors.password}>
                    <Field name='password' type='password' placeholder={password} />
                </InputWrapper>

                <SubmitButton loading={signInLoading}>
                    {signIn}
                </SubmitButton>

            </div>
        );
    }
}

export default connect(getState, getActions)(withTranslate(SignInForm));