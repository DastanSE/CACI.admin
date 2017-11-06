import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';
import { AppBar, FlatButton } from 'material-ui/';

class Menu extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <FlatButton>
              <NavLink
                activeClassName='navlinks-active'
                to={ routeCodes.LOGINPAGE }
                className='navlinks'
              >
                Login
              </NavLink>
            </FlatButton>
          </li>
        );
      default:
        return [
          <li key='1'>
            <FlatButton>
              <NavLink
                activeClassName='navlinks-active'
                to={ routeCodes.CREATE_EVENT }
                className='navlinks'
              >
                Create Event
              </NavLink>
            </FlatButton>
          </li>,
          <li key='2'>
            <FlatButton>
              <NavLink
                activeClassName='navlinks-active'
                to={ routeCodes.LOGINPAGE }
                className='navlinks'
              >
                Logout
              </NavLink>
            </FlatButton>
          </li>,
        ];
    }
  }

  render() {
    return (
      <div>
        <AppBar
          iconElementLeft={
            <NavLink activeClassName='' exact to={ routeCodes.MAINPAGE }>
              <img src='../../../assets/img/logo.png' />
            </NavLink>
          }
          iconElementRight={ <ul className='menu-li'>{this.renderContent()}</ul> }
        />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Menu);
