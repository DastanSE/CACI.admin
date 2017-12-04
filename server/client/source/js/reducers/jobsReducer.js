import AppTypes from '../types/appTypes';

const initialState = {
  jobs: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AppTypes.FETCH_JOBS:
      state = {
        ...state,
        jobs: action.payload || false,
      };
      break;
  }
  return state;
}
