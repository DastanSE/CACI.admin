import { combineReducers } from 'redux';
import authReducer from './authReducer';
import imgUploadReducer from './imgUploadReducer';
import signUpReducer from './signUpReducer';
import eventsReducer from './eventsReducer';
import createEventReducer from './createEventReducer';

export default combineReducers({
  auth: authReducer,
  img: imgUploadReducer,
  signUp: signUpReducer,
  events: eventsReducer,
  createEventReducer,
});
