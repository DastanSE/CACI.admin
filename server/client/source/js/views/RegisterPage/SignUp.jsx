import React, { Component } from 'react';
import { RaisedButton, Paper, TextField, FlatButton } from 'material-ui';


export default class SignUp extends Component {


  sign(e) {
    e.preventDefault();
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>Sign Up</h1>
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
          <br />
          <TextField
            floatingLabelText='Confirm Password'
            type='password'
            onChange={ this.props.onPasswordChange }
          />
        </div>
      </div>
    );
  }
}
