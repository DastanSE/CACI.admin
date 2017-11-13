import React, { Component } from 'react';
import { TextField, FlatButton, Dialog } from 'material-ui';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      signUpPasswordType: 'password',
      username: '',
      password1: '',
      password2: '',
      errorText: '',
      adminPassword: '',
    };
  }

  onEditText = name => {
    return event => {
      this.setState({
        [name]: event.target.value,
      });
    };
  };

  handleSignup() {
    if (this.state.password1 !== this.state.password2) {
      this.setState({
        errorText: 'Password and Confirm Password should match',
      });
    } else {
      this.setState({
        open: true,
        errorText: '',
      });
    }
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit() {
    const { password1: password, username, adminPassword } = this.state;
    const data = {
      username,
      password,
      adminPassword,
    };
    console.log(this.props.signUp);
    this.props.signUp(data);
  }

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
    console.log(this.state);

    const dialog = [
      <FlatButton label='Cancel' primary={ true } onClick={ this.handleClose } />,
      <FlatButton label='Submit' primary={ true } onClick={ this.handleSubmit.bind(this) } />,
    ];

    return (
      <div>
        <h1>Sign Up</h1>
        <div>
          <TextField
            floatingLabelText='Username'
            name='username'
            onChange={ this.onEditText('username') }
          />
          <br />
          <TextField
            floatingLabelText='Password'
            name='password1'
            type='password'
            errorText={ this.state.errorText }
            onChange={ this.onEditText('password1') }
          />
          <br />
          <TextField
            floatingLabelText='Confirm Password'
            name='password2'
            type='password'
            errorText={ this.state.errorText }
            onChange={ this.onEditText('password2') }
          />
        </div>
        <Dialog
          title='Please enter your Admin Panel Sign Up Password'
          actions={ dialog }
          open={ this.state.open }
        >
          <TextField
            floatingLabelText='Admin Panel SignUp password is Requiered'
            type={ this.state.signUpPasswordType }
            fullWidth={ true }
            onChange={ this.onEditText('adminPassword') }
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
  }
}

export default connect(null, actions)(SignUp);
