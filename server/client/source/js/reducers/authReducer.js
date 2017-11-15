import AppTypes from '../types/appTypes';

const initialState = {
  _isLogin: false,
  username: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AppTypes.SESSION_AUTHORIZE_REQUEST:
      state = {
        ...state,
      };
      break;
    case AppTypes.SESSION_AUTHORIZE_FAIL:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    case AppTypes.SESSION_AUTHORIZE_SUCCESS:
      state = {
        ...state,
        _isLogin: action.payload._isLogin,
        username: action.payload.username,
      };
      break;

    case AppTypes.FETCH_USER:
        state = {
          _isLogin: action.payload.username ? true : false,
          username: action.payload.username
        };
      break;
  }
  return state;
}
