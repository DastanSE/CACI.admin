import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Dashboard from 'views/Dashboard';

class LoggedInLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.auth._isLogin) {
      return <Dashboard { ...this.props } />;
    }
    return (
      <Redirect
        to={ {
          pathname: '/',
          state: { from: this.props.location },
        } }
      />
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(LoggedInLayout);
