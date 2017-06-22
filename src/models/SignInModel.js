import yup from 'yup';

export default function SignInModel(translate) {

    const login = translate('form.login');
    const password = translate('form.password');

    const loginEmpty = translate('form.validate.consistsOnlySpaces', { name: login });
    const loginMax = translate('form.validate.longDeslension', { name: login });
    const requirementsForLogin = translate('form.validate.startLetterDeclension', { name: login });
    const required = translate('form.validate.required');
    const passwordMin6 = translate('form.validate.min', { name: password, q: 6 });
    const passwordEmpty = translate('form.validate.consistsOnlySpaces', { name: password });

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