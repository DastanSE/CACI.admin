import { Map } from 'immutable';
import AppConstants from '../constants/AppConstants';

const initialState = Map({
  counter: 0,
  asyncLoading: false,
  asyncError: null,
  asyncData: null,
});

const actionsMap = {
  [AppConstants.GET_BALANCE]: state => {
    const counter = state.get('counter') + 1;

    return state.merge({
      counter,
    });
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
