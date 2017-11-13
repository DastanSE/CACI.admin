import React, { Component } from 'react';
import { RaisedButton, Paper, TextField, FlatButton, Dialog } from 'material-ui';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import SignIn from './SignIn';
import SignUp from './SignUp';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      signUpPasswordType: 'password',
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
    console.log('username: ', username);
    console.log('password: ', password);
    this.props.sessionAuthorize({
      username,
      password,
    });
  }

  handleSignup() {
    this.setState({
      open: true,
    });
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  showHidePassword() {
    if (this.state.signUpPasswordType === 'password') {
      this.setState({
        signUpPasswordType: 'text',
      });
    } else {
      this.setState({
        signUpPasswordType: 'password',
      });
    }
  }

  render() {
    const { match } = this.props;
    console.log(this.state.signUpPasswordType);

    const actions = [
      <FlatButton label='Cancel' primary={ true } onClick={ this.handleClose } />,
      <FlatButton label='Submit' primary={ true } onClick={ this.handleSubmit } />,
    ];

    return (
      <div className='login-page'>
        <Paper className='login-container' zDepth={ 2 }>
          <img src='../../../assets/img/logo.png' />

          <Route
            exact
            path={ match.url }
            render={ () => {
              return (
                <div>
                  <SignIn />
                  <RaisedButton label='Sign in' primary={ true } />
                  <Link to={ `${ match.url }/signup` }>
                    <FlatButton label='Sign up' style={ { marginLeft: '10px' } } primary={ true } />
                  </Link>
                </div>
              );
            } }
          />
          <Route
            exact
            path={ `${ match.url }/signup` }
            render={ () => {
              return (
                <div>
                  <SignUp />
                  <Dialog
                    title='Please enter your Admin Panel Sign Up Password'
                    actions={ actions }
                    open={ this.state.open }
                  >
                    <TextField
                      floatingLabelText='Admin Panel SignUp password is Requiered'
                      type={ this.state.signUpPasswordType }
                      fullWidth={ true }
                      onChange={ this.props.onPasswordChange }
                    />
                    <br />
                    <i
                      className='fa fa-eye'
                      style={ { cursor: 'pointer', marginTop: '10px' } }
                      onClick={ this.showHidePassword.bind(this) }
                      aria-hidden='true'
                    />
                  </Dialog>
                  <FlatButton
                    label='Sign up'
                    style={ { marginLeft: '10px' } }
                    onClick={ this.handleSignup.bind(this) }
                    primary={ true }
                  />
                </div>
              );
            } }
          />
        </Paper>
      </div>
    );
  }
}

export default connect(null, actions)(LoginPage);
