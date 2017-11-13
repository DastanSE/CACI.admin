import axios from 'axios';
import AppTypes from '../types/appTypes';

function signUpRequest() {
  return {
    type: AppTypes.SIGN_UP_REQUEST,
    payload: {
      _isSignUp: false,
    },
  };
}

function signUpSuccess() {
  return {
    type: AppTypes.SIGN_UP_SUCCESS,
    payload: {
      _isSignUp: true,
    },
  };
}

function signUpFail(error) {
  return {
    type: AppTypes.SESSION_AUTHORIZE_FAIL,
    payload: {
      ...error,
      _isSignUp: false,
    },
  };
}

export const signUp = (data) => async dispatch => {
  dispatch(signUpRequest());
  try {
    const res = await axios.post('api/signup', data);
    dispatch(signUpSuccess(res.data));
  } catch (error) {
    dispatch(signUpFail(error));
  }
};
