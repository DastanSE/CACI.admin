import React, { Component } from 'react';
import { RaisedButton, Paper, TextField, FlatButton, Dialog } from 'material-ui';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import SignUp from './SignUp';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      signUpPasswordType: 'password',
      username: '',
      password: '',
    };
  }

  onEditText = name => {
    return event => {
      this.setState({
        [name]: event.target.value,
      });
    };
  };
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.auth._isLogin && nextProps.auth.username) {
      this.props.history.push('/');
    }
  }

  handleSignIn() {
    const { username, password } = this.state;
    const data = {
      username,
      password,
    };
    this.props.sessionAuthorize(data);
  }

  render() {
    const { match } = this.props;
    return (
      <div className='login-page'>
        <Paper className='login-container' zDepth={ 2 }>
          <img src='https://res.cloudinary.com/cacicloud/image/upload/v1511922616/logo_rvlqgl.png' />
          <Route
            exact
            path={ match.url }
            render={ () => {
              return (
                <div>
                  <h1>Sign In</h1>
                  <div>
                    <TextField
                      floatingLabelText='Username'
                      onChange={ this.onEditText('username') }
                    />
                    <br />
                    <TextField
                      floatingLabelText='Password'
                      type='password'
                      onChange={ this.onEditText('password') }
                    />
                  </div>
                  <RaisedButton
                    label='Sign in'
                    onClick={ this.handleSignIn.bind(this) }
                    primary={ true }
                  />
                  <Link to={ `${ match.url }/signup` }>
                    <FlatButton label='Sign up' style={ { marginLeft: '10px' } } primary={ true } />
                  </Link>
                </div>
              );
            } }
          />
          <Route exact path={ `${ match.url }/signup` } render={ () => <SignUp /> } />
        </Paper>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(withRouter(RegisterPage));
