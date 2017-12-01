import AppTypes from '../types/appTypes';

const initialState = {
  openCreateEventSnackbar: false,

};

export default function (state = initialState, action) {
  switch (action.type) {
    case AppTypes.CREATE_EVENT_REQUEST:
      state = {
        ...state,

      };
      break;
    case AppTypes.CREATE_EVENT_FAIL:
      state = {
        ...state,
      };
      break;
    case AppTypes.CREATE_EVENT_SUCCESS:
      state = {
        openCreateEventSnackbar: true,
      };
      break;
  }
  return state;
}
