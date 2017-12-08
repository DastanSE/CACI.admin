import axios from 'axios';
import AppTypes from '../types/appTypes';


function createArticleRequest() {
  return {
    type: AppTypes.CREATE_ARTICLE_REQUEST,
    payload: {
      _isLogin: false,
    },
  };
}

function createArticleSuccess(data) {
  return {
    type: AppTypes.CREATE_ARTICLE_SUCCESS,
    payload: {
      ...data,
      _isLogin: true,
    },
  };
}

function createArticleFail(error) {
  return {
    type: AppTypes.CREATE_ARTICLE_FAIL,
    error: {
      ...error,
      _isLogin: false,
    },
  };
}

export const createArticle = (data) => async dispatch => {
  dispatch(createArticleRequest());
  try {
    const res = await axios.post('api/create_article', data);

    dispatch(createArticleSuccess(res.data));
  } catch (error) {
    dispatch(createArticleFail(error));
  }
};


export const fetchArticle = () => async dispatch => {
  const res = await axios.get('api/fetch_article');

  dispatch({ type: AppTypes.FETCH_ARTICLE, payload: res.data });
};
