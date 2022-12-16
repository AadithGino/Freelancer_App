import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  HOME_REQUEST,
  HOME_SUCCESS,
  HOME_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_IMAGE_REQUEST,
  USER_IMAGE_SUCCESS,
  USER_IMAGE_FAIL,
  USER_PROJECT_REQUEST,
  USER_PROJECT_SUCCESS,
  USER_PROJECT_FAIL,
  USER_PROJECT_VIEW_REQUEST,
  USER_PROJECT_VIEW_SUCCESS,
  USER_PROJECT_VIEW_FAIL,
  USER_DELETE_PROJECT_REQUEST,
  USER_DELETE_PROJECT_SUCCESS,
  USER_DELETE_PROJECT_FAIL,
  USER_SINGLE_PROJECT_REQUEST,
  USER_SINGLE_PROJECT_SUCCESS,
  USER_SINGLE_PROJECT_FAIL,
} from "../Constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true };
    case USER_SIGNUP_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userHomeReducer = (state = {}, action) => {
  switch (action.type) {
    case HOME_REQUEST:
      return { loading: true };
    case HOME_SUCCESS:
      return { loading: false, homedata: action.payload };
    case HOME_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userprofilereduer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return { loading: true };

    case USER_PROFILE_SUCCESS:
      return { loading: false, profiledata: action.payload };

    case USER_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userImageUplaodReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_IMAGE_REQUEST:
      return { imageloading: true };

    case USER_IMAGE_SUCCESS:
      return { imageloading: false, userimage: action.payload };

    case USER_IMAGE_FAIL:
      return { imageloading: false, error: action.payload };
    default:
      return state;
  }
};

export const userProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROJECT_REQUEST:
      return { loading: true };

    case USER_PROJECT_SUCCESS:
      return { loading: false, info: action.payload };

    case USER_PROJECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userProjectView = (state = {}, action) => {
  switch (action.type) {
    case USER_PROJECT_VIEW_REQUEST:
      return { loading: true };

    case USER_PROJECT_VIEW_SUCCESS:
      return { loading: false, data: action.payload };

    case USER_PROJECT_VIEW_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userProjectDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_PROJECT_REQUEST:
      return { deleteloading: true };

    case USER_DELETE_PROJECT_SUCCESS:
      return { deleteloading: false, deletedata: action.payload };

    case USER_DELETE_PROJECT_FAIL:
      return { deleteloading: false, deleteerror: action.payload };

    default:
      return state;
  }
};

export const userSingleProjectReducer = (state={},action)=>{
  switch (action.type) {
    case USER_SINGLE_PROJECT_REQUEST:
      return {loading:true}
    
    case USER_SINGLE_PROJECT_SUCCESS:
      return {loading:false,data:action.payload}

    case USER_SINGLE_PROJECT_FAIL:
      return {loading:false,error:action.payload}
  
    default:
      return state;
  }
}