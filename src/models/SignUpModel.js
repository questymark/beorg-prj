import yup from 'yup';

export default function SignUpModel(translate) {
    yup.addMethod(yup.mixed, 'sameAs', function sameAsCb(ref, message) {
        return this.test('sameAs', message, function sameAsCheck(value) {
            const other = this.resolve(ref);
            return !other || !value || value === other;
        });
    });

    const name = translate('form.name');
    const email = translate('form.email');
    const password = translate('form.password');
    const passwords = translate('form.passwords');

    const nameEmpty = translate('form.validate.consistsOnlySpaces', { name });
    const nameMax = translate('form.validate.long', { name });
    const requirementsForName = translate('form.validate.startLetter', { name });
    const required = translate('form.validate.required');
    const incorrectEmail = translate('form.validate.incorrectDeclension', { name: email });
    const emailEmpty = translate('form.validate.consistsOnlySpaces', { name: email });
    const passwordMin6 = translate('form.validate.min', { name: password, q: 6 });
    const passwordEmpty = translate('form.validate.consistsOnlySpaces', { name: password });
    const passwordsDontMatch = translate('form.validate.dontMatch', { names: passwords });
    const passwordRetype = translate('form.validate.retype', { name: password });

    return yup.object().shape({
        username: yup.string()
            .matches(/\S/, nameEmpty)
            .max(255, nameMax)
            .matches(/^[a-zA-Zа-яА-ЯёЁ]+[a-zA-Zа-яА-ЯёЁ|\d|\s|-]*$/, requirementsForName)
            .required(required),
        email: yup.string().email(incorrectEmail)
            .required(required)
            .matches(/\S/, emailEmpty),
        password: yup.string()
            .required(required)
            .min(6, passwordMin6)
            .matches(/\S/, passwordEmpty),
        passwordRepeat: yup.string()
            .sameAs(yup.ref('password'), passwordsDontMatch)
            .required(passwordRetype)
    });
}