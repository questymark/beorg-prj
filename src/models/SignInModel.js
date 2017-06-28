import yup from 'yup';

export default function SignInModel(translate) {
    const loginEmpty = translate('form.validate.loginEmpty');
    const loginMax = translate('form.validate.loginMax');
    const requirementsForLogin = translate('form.validate.requirementsForLogin');
    const required = translate('form.validate.required');
    const passwordMin6 = translate('form.validate.passwordMin6');
    const passwordEmpty = translate('form.validate.passwordEmpty');

    return yup.object().shape({
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
}