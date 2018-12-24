import React from 'react';
import { Router, Route, Switch, Link } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import { LoginPage } from '../components/LoginPage';
import TodoDashboard from '../components/TodoDashboard';
import Header from '../components/Header';
import EmailLoginPage from '../components/EmailLoginPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/signin" component={EmailLoginPage} />
        <Route path="/dashboard" component={TodoDashboard} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
