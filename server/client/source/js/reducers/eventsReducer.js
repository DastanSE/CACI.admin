import AppTypes from '../types/appTypes';

const initialState = {
  events: [],
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AppTypes.FETCH_EVENTS:
      state = {
        ...state,
        data: action.payload || false,
      };
      break;
  }
  return state;
}
