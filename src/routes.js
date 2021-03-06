import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Wrapper from './wrapper';
import Logout from './auth/Logout';
import Authorize from './auth/Authorize';
import Developer from './developer/Developer';
import Dashboard from './dashboard/Dashboard';
import Apps from './apps/Apps';
import Payments from './payments/Payments';
import Activity from './activity/Activity';
import Profile from './profile/Profile';

module.exports = (
  <Route path="/" component={Wrapper}>
    <IndexRoute component={Dashboard} />
    <Route path="/logout" component={Logout} />
    <Route path="/apps" component={Apps} />
    <Route path="/activity" component={Activity} />
    <Route path="/payments" component={Payments} />
    <Route path="/profile" component={Profile} />
    <Route path="/developers" component={Developer} />
    <Route path="/about" component={Dashboard} />
    <Route path="/authorize/@:app" component={Authorize} />
  </Route>
);