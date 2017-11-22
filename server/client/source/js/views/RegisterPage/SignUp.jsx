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
      usernameError: '',
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
    if(this.state.username === ''){
      this.setState({
        usernameError: 'Should not be empty'
      })
    }
    if (!(this.state.password1 && this.state.password2)) {
      this.setState({
        errorText: 'Should not be empty',
      });
    } else if (this.state.password1 !== this.state.password2) {
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

    const dialog = [
      <FlatButton label='Cancel' primary={ true } onClick={ this.handleClose } />,
      <FlatButton label='Submit' primary={ true } onClick={ this.handleSubmit.bind(this) } />,
    ];
    console.log(this.props);
    return (
      <div>
        <h1>Sign Up</h1>
        <div>
          <TextField
            floatingLabelText='Username'
            name='username'
            errorText={ this.state.usernameError }
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
            errorText={ this.props.signUp.errorText }
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

function mapStateToProps({ signUp }) {
  return { signUp };
}

export default connect(mapStateToProps, actions)(SignUp);
