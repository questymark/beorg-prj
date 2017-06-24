import React from 'react';
import { Route, IndexRoute }  from 'react-router';

import App from 'components/App';
import MainLayout from 'components/MainLayout';
import SignInPage from 'components/SignIn'
import MainPage from 'components/MainPage/MainPage';
import ProjectsPage from 'components/Projects/ProjectsPage';
import PaymentPage from 'components/Payment/PaymentPage';
import ExportPage from 'components/Export/ExportPage';
import UploadingPage from 'components/Uploading/UploadingPage';

export default (
  <Route component={App}>
      <Route path='/signin' component={SignInPage} />

      <Route component={MainLayout} path='/'>
          <IndexRoute component={MainPage}/>
          <Route component={ProjectsPage} path='projects'/>
          <Route component={PaymentPage} path='payment'/>
          <Route component={ExportPage} path='export'/>
          <Route component={UploadingPage} path='uploading'/>
      </Route>
  </Route>
);