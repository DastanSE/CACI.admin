import axios from 'axios';
import AppTypes from '../types/appTypes';

const cloudinaryApiKey = '171693432154957';
const cloudinaryApiSecretKey = 'dXU3Q3Onp0RtYt8EvL8a9mDMs8g';
const cloudinaryUploadPreset = 'evmcpql0';
const cloudinaryImageUploadUrl = 'https://api.cloudinary.com/v1_1/dastan1994/image/upload';

function imageUploadRequest() {
  return {
    type: AppTypes.UPLOAD_IMG_REQUEST,
    payload: {
      _imageIsLoading: true
    }
  };
}

function imageUploadSuccess(data) {
  return {
    type: AppTypes.UPLOAD_IMG_SUCCES,
    payload: {
      ...data,
      _imageIsLoading: false
    },
  };
}

function imageUploadFail(error) {
  return {
    type: AppTypes.UPLOAD_IMG_FAIL,
    error: {
      ...error,
      _imageIsLoading: false
    },
  };
}

export const uploadImg = (file) => async dispatch => {

  dispatch(imageUploadRequest());
  const formData = new FormData();

  formData.append('file', file);
  formData.append('upload_preset', cloudinaryUploadPreset);
  try {
    const res = await axios({
      url: cloudinaryImageUploadUrl,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: formData,
    });

    dispatch(imageUploadSuccess(res.data));
  } catch (error) {
    dispatch(imageUploadFail(error));
  }
};
