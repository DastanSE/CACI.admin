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

export const sessionAuthorize = data => async dispatch => {
  dispatch(sessionAuthorizeRequest());
  try {
    const res = await axios.post('api/signin', data);

    dispatch(sessionAuthorizeSuccess(res.data));
  } catch (error) {
    dispatch(sessionAuthorizeFail(error));
  }
};

export const sessionLogout = () => async dispatch => {
  try {
    const res = await axios.post('api/logout');

    dispatch({
      type: AppTypes.SESSION_LOGOUT,
    });
  } catch (error) {
    dispatch(sessionAuthorizeFail(error));
  }
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get('api/current_user');
  dispatch({ type: AppTypes.FETCH_USER, payload: res.data });
};
