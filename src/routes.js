import React from 'react';
import { Route, IndexRoute }  from 'react-router';

import App from 'components/App';
import MainPage from 'components/MainPage';
// import SignInPage from 'components/SignIn'

export default (
  <Route component={App} path='/'>
    <IndexRoute component={MainPage} />
    {/*<Route path='/signin' component={SignInPage} />*/}
  </Route>
);