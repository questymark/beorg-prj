import yup from 'yup';
import i18next from 'i18next';

const loginEmpty = i18next.t('form.validate.loginEmpty');
const loginMax = i18next.t('form.validate.loginMax');
const requirementsForLogin = i18next.t('form.validate.requirementsForLogin');
const required = i18next.t('form.validate.required');
const passwordMin6 = i18next.t('form.validate.passwordMin6');
const passwordEmpty = i18next.t('form.validate.passwordEmpty');

const SignInModel = yup.object().shape({
    username: yup.string()
        .matches(/\S/, loginEmpty)
        .max(255, loginMax)
        .matches(/^[a-zA-Zа-яА-ЯёЁ]+[a-zA-Zа-яА-ЯёЁ|\d|\s|-]*$/, requirementsForLogin)
        .required(required),
    password: yup.string()
        .required(required)
        .min(6, passwordMin6)
        .matches(/\S/, passwordEmpty)
});

export default SignInModel;