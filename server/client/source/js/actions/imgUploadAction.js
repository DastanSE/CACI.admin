import axios from 'axios';
import AppTypes from '../types/appTypes';

const cloudinaryApiKey = '239464588862319';
const cloudinaryApiSecretKey = 'mU288gYhgiLGJIEv5d4S2Yv4sYs';
const cloudinaryUploadPreset = 'rpepxdxq';
const cloudinaryImageUploadUrl = 'https://api.cloudinary.com/v1_1/cacicloud/image/upload';

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
