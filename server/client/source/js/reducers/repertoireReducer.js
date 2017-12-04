import AppTypes from '../types/appTypes';

const initialState = {
  repertoire: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AppTypes.FETCH_REPERTOIRE:
      state = {
        ...state,
        repertoire: action.payload || false,
      };
      break;
  }
  return state;
}
