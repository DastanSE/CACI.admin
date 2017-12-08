import AppTypes from '../types/appTypes';

const initialState = {
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AppTypes.FETCH_ARTICLE:
      state = {
        ...state,
        data: action.payload || false,
      };
      break;
  }
  return state;
}
