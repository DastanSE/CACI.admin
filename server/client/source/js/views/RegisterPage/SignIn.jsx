import React, { Component } from 'react';
import { RaisedButton, Paper, TextField, FlatButton } from 'material-ui';


export default class SignIn extends Component {

  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>Sign In</h1>
        <div>
          <TextField
            floatingLabelText='Username'
            onChange={ this.props.onUsernameChange }
          />
          <br />
          <TextField
            floatingLabelText='Password'
            type='password'
            onChange={ this.props.onPasswordChange }
          />
        </div>
      </div>
    );
  }
}
