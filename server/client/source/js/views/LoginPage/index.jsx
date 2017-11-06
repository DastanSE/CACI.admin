import React, { Component } from 'react';
import { RaisedButton, Paper, TextField } from 'material-ui';


export default class LoginPage extends Component {
  render() {
    return (
      <div className='login-page'>
        <Paper className='login-container' zDepth={ 2 }>          
          <img src='../../../assets/img/logo.png' />
          <h1>Login</h1>
          <div>
            <TextField floatingLabelText='Please enter your login account' />
            <br />
            <TextField floatingLabelText='Please enter your password' type='password' />
            <br />
            <RaisedButton label='Log in' primary={ true } />
          </div>
        </Paper>
      </div>
    );
  }
}
