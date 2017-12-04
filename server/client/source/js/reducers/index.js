import { combineReducers } from 'redux';
import authReducer from './authReducer';
import imgUploadReducer from './imgUploadReducer';
import signUpReducer from './signUpReducer';
import eventsReducer from './eventsReducer';
import createEventReducer from './createEventReducer';
import jobsReducer from './jobsReducer';
import newsReducer from './newsReducer';

export default combineReducers({
  auth: authReducer,
  img: imgUploadReducer,
  signUp: signUpReducer,
  events: eventsReducer,
  createEventReducer,
  jobs: jobsReducer,
  news: newsReducer,
});
