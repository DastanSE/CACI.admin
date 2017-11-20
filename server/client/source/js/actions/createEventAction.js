import axios from 'axios';
import AppTypes from '../types/appTypes';


function createEventRequest() {
  return {
    type: AppTypes.CREATE_EVENT_REQUEST,
    payload: {
      _isLogin: false,
    },
  };
}

function createEventSuccess(data) {
  return {
    type: AppTypes.CREATE_EVENT_SUCCESS,
    payload: {
      ...data,
      _isLogin: true,
    },
  };
}

function createEventFail(error) {
  return {
    type: AppTypes.CREATE_EVENT_FAIL,
    error: {
      ...error,
      _isLogin: false,
    },
  };
}

export const createEvent = (data) => async dispatch => {
  dispatch(createEventRequest());
  try {
    const res = await axios.post('api/create_event', data);

    dispatch(createEventSuccess(res.data));
  } catch (error) {
    dispatch(createEventFail(error));
  }
};
