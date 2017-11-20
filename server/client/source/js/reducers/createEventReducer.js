import AppTypes from '../types/appTypes';

const initialState = {
  title: '',
  event_images: [],
  event_date: '',
  event_link: '',
  event_body: '',
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
        ...state,
      };
      break;
  }
  return state;
}
