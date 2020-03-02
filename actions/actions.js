import {
  FETCH_LOADER,
  FETCH_GALLERY_SUCCESS,
  FETCH_GALLERY_ERROR,
} from '../constans/constans';
import PhotoService from '../service/PhotoService';

const service = new PhotoService();

export const getGallery = () => {
  return dispatch => {
    dispatch(fetchLoader());
    service.getPhotoGallery().then(
      data => {
        dispatch(fetchGallerySuccess(data));
      },
      error => {
        dispatch(fetchError(error));
      },
    );
  };
};
const fetchLoader = () => {
  return {
    type: FETCH_LOADER,
  };
};
export const fetchGallerySuccess = data => {
  return {
    type: FETCH_GALLERY_SUCCESS,
    payload: data,
  };
};

export const fetchError = error => {
  return {
    type: FETCH_GALLERY_ERROR,
    payload: error,
  };
};
