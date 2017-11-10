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

export const sessionAuthorize = (user = {}) => async dispatch => {
  dispatch(sessionAuthorizeRequest());
  const formData = new FormData();

  formData.append('user', user.username);
  formData.append('passport', user.passport);
  try {
    const res = await axios.post('api/login', formData);

    dispatch(sessionAuthorizeSuccess(res.data));
  } catch (error) {
    dispatch(sessionAuthorizeFail(error));
  }
};
