import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainPage from 'views/MainPage';
import RegisterPage from 'views/RegisterPage';
import Dashboard from 'views/Dashboard';
import Menu from 'components/Global/Menu';

const publicPath = '/';
const adminPath = '/admin';

export const routeCodes = {
  PUBLIC: `${ publicPath }`,
  ADMINPAGE: `${ adminPath }`,
  REGISTERPAGE: `${ publicPath }register`,
  CREATE_EVENT: `${ adminPath }create_event`,
  DASHBOARD: `${ adminPath }dashboard`,
};

const loggedIn = null;

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    children: PropTypes.object,
  };

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route
              exact
              path={ routeCodes.PUBLIC }
              render={ () =>
                loggedIn ? (
                  <Redirect to={ routeCodes.ADMINPAGE } />
                ) : (
                  <Redirect to={ routeCodes.REGISTERPAGE } />
                ) }
            />
            <Route path={ routeCodes.REGISTERPAGE } component={ RegisterPage } />
            <Route path={ routeCodes.ADMINPAGE } component={ Dashboard } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
