import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PropTypes from 'prop-types';
import MainPage from 'views/MainPage';
import RegisterPage from 'views/RegisterPage';
import Dashboard from 'views/Dashboard';
import LoggedInLayout from 'views/LoggedInLayout';
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

class App extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    children: PropTypes.object,
  };

  componentWillMount() {
    this.props.fetchUser();
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.auth._isLogin && nextProps.auth.username) {
      return true;
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route
              exact
              path={ routeCodes.PUBLIC }
              render={ () =>
                this.props.auth.username ? (
                  <Redirect to={ routeCodes.ADMINPAGE } />
                ) : (
                  <Redirect to={ routeCodes.REGISTERPAGE } />
                ) }
            />
            <Route path={ routeCodes.REGISTERPAGE } component={ RegisterPage } />
            <Route path={ routeCodes.ADMINPAGE } component={ LoggedInLayout } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);
