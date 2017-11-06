import { combineReducers } from 'redux';
import authReducer from './authReducer';
import imgUploadReducer from './imgUploadReducer';


export default combineReducers({
  authReducer,
  imgUploadReducer,
});
