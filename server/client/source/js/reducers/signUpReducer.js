import AppTypes from '../types/appTypes';

const initialState = {
  _isLogin: false,
  errorMessage: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AppTypes.SIGN_UP_REQUEST:
      state = {
        ...state,
      };
      break;
    case AppTypes.SIGN_UP_FAIL:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    case AppTypes.SIGN_UP:
      state = {
        ...state,
        _isLogin: action.payload._isLogin,
        data: action.payload.data,
        errorMessage: action.payload.data.error
      };
      break;
  }
  return state;
}
