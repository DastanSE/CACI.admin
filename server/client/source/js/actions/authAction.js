import axios from 'axios';
import AppTypes from '../types/appTypes';

function sessionAuthorizeRequest() {
  return {
    type: AppTypes.SESSION_AUTHORIZE_REQUEST,
    payload: {
      _isLogin: false,
    },
  };
}

function sessionAuthorizeSuccess(data) {
  return {
    type: AppTypes.SESSION_AUTHORIZE_SUCCESS,
    payload: {
      ...data,
      _isLogin: true,
    },
  };
}

function sessionAuthorizeFail(error) {
  return {
    type: AppTypes.SESSION_AUTHORIZE_FAIL,
    error: {
      ...error,
      _isLogin: false,
    },
  };
}

export const sessionAuthorize = (data) => async dispatch => {
  dispatch(sessionAuthorizeRequest());
  try {
    const res = await axios.post('api/login', data);

    dispatch(sessionAuthorizeSuccess(res.data));
  } catch (error) {
    dispatch(sessionAuthorizeFail(error));
  }
};
