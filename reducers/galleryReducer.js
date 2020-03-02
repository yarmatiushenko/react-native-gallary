import {
  FETCH_LOADER,
  FETCH_GALLERY_SUCCESS,
  FETCH_GALLERY_ERROR,
} from '../constans/constans';
const initialState = {
  loading: false,
  gallery: [],
  error: '',
};

export function galleryReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOADER:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GALLERY_SUCCESS:
      return {
        ...state,
        gallery: action.payload,
        loading: false,
      };
    case FETCH_GALLERY_ERROR:
      return {
        ...state,
        error: action.payload.message,
        loading: false,
      };

    default:
      return state;
  }
}
