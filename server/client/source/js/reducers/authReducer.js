import AppTypes from '../types/appTypes';

const initialState = {
  _isLogin:  false
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
        data: action.payload.data,
      };
      break;
  }
  return state;
}
