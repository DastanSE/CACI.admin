import React, { Component } from 'react';
import { RaisedButton, Paper, TextField } from 'material-ui';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onUsernameChange(e, newValue) {
    this.setState({ username: newValue });
  }

  onPasswordChange(e, newValue) {
    this.setState({ password: newValue });
  }

  handleClick() {
    const { username, password } = this.state;
    console.log("username: ", username);
    console.log("password: ", password);
    this.props.sessionAuthorize({
      username,
      password,
    });
  }

  render() {
    return (
      <div className='login-page'>
        <Paper className='login-container' zDepth={ 2 }>
          <img src='../../../assets/img/logo.png' />
          <h1>Login</h1>
          <div>
            <TextField
              floatingLabelText='Please enter your login account'
              onChange={ this.onUsernameChange.bind(this) }
            />
            <br />
            <TextField
              floatingLabelText='Please enter your password'
              type='password'
              onChange={ this.onPasswordChange.bind(this) }
            />
            <br />
            <RaisedButton label='Log in' onClick={ this.handleClick.bind(this) } primary={ true } />
          </div>
        </Paper>
      </div>
    );
  }
}

export default connect(null, actions)(LoginPage);
