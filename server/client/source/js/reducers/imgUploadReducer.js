import AppTypes from '../types/appTypes';

const initialState = {
  _imageIsLoading: false,
  imgSrc: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AppTypes.UPLOAD_IMG_REQUEST:
      state = {
        ...state,
        _imageIsLoading: action.payload._imageIsLoading,
      };
      break;
    case AppTypes.UPLOAD_IMG_FAIL:
      state = {
        ...state,
        _imageIsLoading: action.payload._imageIsLoading,
        error: action.payload.error,
      };
      break;
    case AppTypes.UPLOAD_IMG_SUCCES:
      const images = state.imgSrc.slice();
      images.push(action.payload.secure_url);
      state = {
        ...state,
        _imageIsLoading: action.payload._imageIsLoading,
        data: action.payload.data,
        imgSrc: images,
      };
      break;
  }
  return state;
}
