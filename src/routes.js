import React from 'react';
import { Route, IndexRoute }  from 'react-router';

import App from 'components/App';
import MainPage from 'components/MainPage';
import SignPage from 'components/Sign'
import SignInForm from 'components/Sign/SignInForm';
import SignUpForm from 'components/Sign/SignUpForm';

export default (
  <Route component={App} path='/'>
    <IndexRoute component={MainPage} />
    <Route component={SignPage}>
        <Route component={SignInForm} path='signin'/>
        <Route component={SignUpForm} path='signup'/>
    </Route>
  </Route>
);