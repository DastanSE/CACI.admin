import axios from 'axios';
import AppTypes from '../types/appTypes';


function createJobRequest() {
  return {
    type: AppTypes.CREATE_JOB_REQUEST,
    payload: {
      _isLogin: false,
    },
  };
}

function createJobSuccess(data) {
  return {
    type: AppTypes.CREATE_JOB_SUCCESS,
    payload: {
      ...data,
      _isLogin: true,
    },
  };
}

function createJobFail(error) {
  return {
    type: AppTypes.CREATE_JOB_FAIL,
    error: {
      ...error,
      _isLogin: false,
    },
  };
}

export const createJob = (data) => async dispatch => {
  dispatch(createJobRequest());
  try {
    const res = await axios.post('api/create_job', data);

    dispatch(createJobSuccess(res.data));
  } catch (error) {
    dispatch(createJobFail(error));
  }
};


export const fetchJobs = () => async dispatch => {
  const res = await axios.get('api/fetch_jobs');

  dispatch({ type: AppTypes.FETCH_JOBS, payload: res.data });
};
