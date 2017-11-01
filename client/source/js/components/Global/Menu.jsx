import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';
import { AppBar, FlatButton } from 'material-ui/';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <AppBar
          title='CACI Admin Panel'
          iconElementLeft={ <imp src='../../assets/img/logo.png' alt='logo' /> }
          iconElementRight={ <FlatButton  label='Login' /> }
        />
      </div>
    );
  }
}
