import { combineReducers } from 'redux';
import authReducer from './authReducer';
import imgUploadReducer from './imgUploadReducer';
import signUpReducer from './signUpReducer';

export default combineReducers({
  auth: authReducer,
  img: imgUploadReducer,
  signUp: signUpReducer,
});
