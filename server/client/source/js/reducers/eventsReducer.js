import AppTypes from '../types/appTypes';

const initialState = {
  openSnackbar: false,
  events: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AppTypes.FETCH_EVENTS:
      state = {
        ...state,
        data: action.payload,
      };
      break;
  }
  return state;
}
