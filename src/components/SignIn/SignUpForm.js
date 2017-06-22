import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTranslate } from 'react-redux-multilingual'
import { Field } from 'react-formal';

import { FormConstructor, InputWrapper, SubmitButton } from 'components/Common/Forms';
import SignUpModel from 'models/SignUpModel';
import { signUp } from 'ducks/auth';

const getState = state => ({
    signUpLoading: state.auth.signUpLoading,
    signUpLoaded: state.auth.signUpLoaded,
});

const getActions = dispatch => (
    bindActionCreators({
        signUp
    }, dispatch)
);

class SignUpForm extends FormConstructor {
    constructor(props) {
        super(props);

        this.schema = SignUpModel(props.translate);

        this.state = {
            form: this.schema.default(),
            errors: {}
        };

    }

    handleSubmit(formData) {
        console.log('submitting values:', formData);

        this.props.signUp(formData);
    }

    render() {
        const { signUpLoading, translate } = this.props;

        const name = translate('form.name');
        const email = translate('form.email');
        const password = translate('form.password');
        const passwordRepeat = translate('form.passwordRepeat');
        const signUp = translate('form.signUp', { name: password });

        return this.renderForm(
            <div className='signin-form'>
                <InputWrapper label={name} error={this.state.errors.username}>
                    <Field name='username' placeholder={name} />
                </InputWrapper>

                <InputWrapper label={email} error={this.state.errors.email}>
                    <Field name='email' placeholder={email} />
                </InputWrapper>

                <InputWrapper label={password}  error={this.state.errors.password}>
                    <Field name='password' type='password' placeholder={password} />
                </InputWrapper>

                <InputWrapper label={passwordRepeat}  error={this.state.errors.passwordRepeat}>
                    <Field name='passwordRepeat' type='password' placeholder={passwordRepeat} />
                </InputWrapper>

                <SubmitButton loading={signUpLoading}>
                    {signUp}
                </SubmitButton>
            </div>
        );
    }
}

export default connect(getState, getActions)(withTranslate(SignUpForm))