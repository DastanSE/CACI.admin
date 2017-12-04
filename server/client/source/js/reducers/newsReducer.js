import AppTypes from '../types/appTypes';

const initialState = {
  news: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AppTypes.FETCH_NEWS:
      state = {
        ...state,
        news: action.payload || false,
      };
      break;
  }
  return state;
}
