export default {
    locale: 'ru',
    messages: {
        hello_world: 'Привет, мир!',
        forms: {
            signIn: 'Вход',
            signUp: 'Регистрация'
        },
        form: {
            login: 'Логин',
            name: 'Имя',
            email: 'Email',
            password: 'Пароль',
            passwords: 'Пароли',
            passwordRepeat: 'Пароль еще раз',
            signIn: 'Войти',
            signUp: 'Зарегистрироваться',
            validate: {
                consistsOnlySpaces: '{name} состоит из одних пробелов',
                long: 'Слишком длинное {name}',
                longDeslension: 'Слишком длинный {name}',
                incorrect: 'Некорректное {name}',
                incorrectDeclension: 'Некорректный {name}',
                startLetter: '{name} должно начинаться с буквы и может содержать буквы, цифры и тире',
                startLetterDeclension: '{name} должен начинаться с буквы и может содержать буквы, цифры и тире',
                required: 'Поле обязательно для заполнения',
                min: '{name} должен быть не менее {q} символов',
                dontMatch: '{names} не совпадают',
                retype: 'Введите {name} еще раз'
            }
        }
    }
}