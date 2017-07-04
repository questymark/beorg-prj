import MockAdapter from 'axios-mock-adapter';

export default function mockApi(axios) {
    const mock = new MockAdapter(axios, { delayResponse: 1000 });

    mock.onPost('http://localhost:8080/uaa/oauth/token?grant_type=password&username=user&password=password').reply(200, {
        access_token: '18eb67b0-0e94-4908-a22d-e7f1300fa3f2',
        token_type: 'bearer',
        refresh_token: 'ffc94eae-67d0-416c-8c85-764cc42d8c69',
        expires_in: 41735,
        scope: 'ui'
    });

    mock.onPost('http://localhost:8080/uaa/oauth/token?grant_type=password&username=user1&password=password').reply(200, {
        access_token: '18eb67b0-0e94-4908-a22d-e7f1300fa3f2',
        token_type: 'bearer',
        refresh_token: 'ffc94eae-67d0-416c-8c85-764cc42d8c60',
        expires_in: 41735,
        scope: 'ui'
    });

    mock.onPost('http://localhost:8080/refresh_token=ffc94eae-67d0-416c-8c85-764cc42d8c69').reply(200, {
        access_token: '18eb67b0-0e94-4908-a22d-e7f1300fa3f2',
        token_type: 'bearer',
        refresh_token: 'ffc94eae-67d0-416c-8c85-764cc42d8c69',
        expires_in: 41735,
        scope: 'ui'
    });

    mock.onPost('http://localhost:8080/registration').reply(200, {
        success: false,
        errorCode: 123,
        body: {}
    });

    mock.onPost('http://localhost:8080/some').reply(401, {
        success: false,
        errorCode: 123,
        body: {}
    });
}