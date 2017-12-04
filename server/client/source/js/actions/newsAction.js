import axios from 'axios';
import AppTypes from '../types/appTypes';


function createNewsRequest() {
  return {
    type: AppTypes.CREATE_NEWS_REQUEST,
    payload: {
      _isLogin: false,
    },
  };
}

function createNewsSuccess(data) {
  return {
    type: AppTypes.CREATE_NEWS_SUCCESS,
    payload: {
      ...data,
      _isLogin: true,
    },
  };
}

function createNewsFail(error) {
  return {
    type: AppTypes.CREATE_NEWS_FAIL,
    error: {
      ...error,
      _isLogin: false,
    },
  };
}

export const createNews = (data) => async dispatch => {
  dispatch(createNewsRequest());
  try {
    const res = await axios.post('api/create_news', data);

    dispatch(createNewsSuccess(res.data));
  } catch (error) {
    dispatch(createNewsFail(error));
  }
};


export const fetchNews = () => async dispatch => {
  const res = await axios.get('api/fetch_news');

  dispatch({ type: AppTypes.FETCH_NEWS, payload: res.data });
};
