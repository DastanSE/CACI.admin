import axios from 'axios';
import AppTypes from '../types/appTypes';


function createRepertoireRequest() {
  return {
    type: AppTypes.CREATE_REPERTOIRE_REQUEST,
    payload: {
      _isLogin: false,
    },
  };
}

function createRepertoireSuccess(data) {
  return {
    type: AppTypes.CREATE_REPERTOIRE_SUCCESS,
    payload: {
      ...data,
      _isLogin: true,
    },
  };
}

function createRepertoireFail(error) {
  return {
    type: AppTypes.CREATE_REPERTOIRE_FAIL,
    error: {
      ...error,
      _isLogin: false,
    },
  };
}

export const createRepertoire = (data) => async dispatch => {
  dispatch(createRepertoireRequest());
  try {
    const res = await axios.post('api/create_repertoire', data);

    dispatch(createRepertoireSuccess(res.data));
  } catch (error) {
    dispatch(createRepertoireFail(error));
  }
};


export const fetchRepertoire = () => async dispatch => {
  const res = await axios.get('api/fetch_repertoire');

  dispatch({ type: AppTypes.FETCH_REPERTOIRE, payload: res.data });
};
