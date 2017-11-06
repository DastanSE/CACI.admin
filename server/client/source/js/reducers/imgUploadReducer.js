import UPLOAD_IMG_REQUEST from '../types/appTypes';
import UPLOAD_IMG_FAIL from '../types/appTypes';
import UPLOAD_IMG_SUCCES from '../types/appTypes';

export default function(state = null, action) {
  switch (action.type) {
    case UPLOAD_IMG_REQUEST:
      return action.payload || false;
    case UPLOAD_IMG_FAIL:
      return action.payload || false;
    case UPLOAD_IMG_SUCCES:
      return action.payload;
    default:
      return false;
  }
}
