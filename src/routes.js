import React from 'react';
import { Route, IndexRoute }  from 'react-router';

import App from 'components/App';
import MainLayout from 'components/MainLayout';
import ProjectsPage from 'components/Projects/ProjectsPage';
import PaymentPage from 'components/Payment/PaymentPage';
import ExportPage from 'components/Export/ExportPage';
import UploadingPage from 'components/Uploading/UploadingPage';
import MainPage from 'components/MainPage';
import SignPage from 'components/Sign'
import SignInForm from 'components/Sign/SignInForm';
import SignUpForm from 'components/Sign/SignUpForm';

export default (
  <Route component={App}>
      <Route component={SignPage}>
          <Route component={SignInForm} path='signin'/>
          <Route component={SignUpForm} path='signup'/>
      </Route>

      <Route component={MainLayout} path='/'>
          <IndexRoute component={MainPage}/>
          <Route component={ProjectsPage} path='projects'/>
          <Route component={PaymentPage} path='payment'/>
          <Route component={ExportPage} path='export'/>
          <Route component={UploadingPage} path='uploading'/>
      </Route>
  </Route>
);