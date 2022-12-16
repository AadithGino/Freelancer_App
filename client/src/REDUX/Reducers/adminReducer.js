import {
  ADMIN_APPLY_FAIL,
  ADMIN_APPLY_REQUEST,
  ADMIN_APPLY_SUCCESS,
  ADMIN_HOME_REQUEST,
  ADMIN_HOME_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
  ADMIN_PROJECT_FAIL,
  ADMIN_PROJECT_REQUEST,
  ADMIN_PROJECT_SUCCESS,
  ADMIN_SEARCH_FAIL,
  ADMIN_SEARCH_REQUEST,
  ADMIN_SEARCH_SUCCESS,
  ADMIN_SINGUP_FAIL,
  ADMIN_SINGUP_REQUEST,
  ADMIN_SINGUP_SUCCESS,
  ADMIN_USER_BLOCK_FAIL,
  ADMIN_USER_BLOCK_REQUSET,
  ADMIN_USER_BLOCK_SUCCESS,
  ADMIN_USER_DELETE_FAIL,
  ADMIN_USER_DELETE_REQUEST,
  ADMIN_USER_DELETE_SUCCESS,
} from "../Constants/adminConstants";

export const adminLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { loading: true };
    case ADMIN_LOGIN_SUCCESS:
      return { loading: false, adminInfo: action.payload };
    case ADMIN_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminHomeReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_HOME_REQUEST:
      return { loading: true };

    case ADMIN_HOME_SUCCESS:
      return { loading: false, adminHome: action.payload };

    case ADMIN_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminBlockReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_USER_BLOCK_REQUSET:
      return { blockloading: true };
    case ADMIN_USER_BLOCK_SUCCESS:
      return { blockloading: false, blockdata: action.payload };
    case ADMIN_USER_BLOCK_FAIL:
      return { blockloading: false, blockerror: action.payload };
    case ADMIN_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const adminDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_USER_DELETE_REQUEST:
      return { deleteloading: true };

    case ADMIN_USER_DELETE_SUCCESS:
      return { deleteloading: false, deletedata: action.payload };

    case ADMIN_USER_DELETE_FAIL:
      return { deleteloading: false, deleteerror: action.payload };
    default:
      return state;
  }
};

export const adminSearchReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_SEARCH_REQUEST:
      return { searchloading: true };

    case ADMIN_SEARCH_SUCCESS:
      return { searchloading: false, searchresult: action.payload };

    case ADMIN_SEARCH_FAIL:
      return { loading: false, searcherror: action.payload };
    default:
      return state;
  }
};

export const adminSignUpReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_SINGUP_REQUEST:
      return { loading: true };
    case ADMIN_SINGUP_SUCCESS:
      return { loading: false, info: action.payload };
    case ADMIN_SINGUP_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const adminProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_PROJECT_REQUEST:
      return { loading: true };

    case ADMIN_PROJECT_SUCCESS:
      return { loading: false, projects: action.payload };

    case ADMIN_PROJECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminProjectApply = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_APPLY_REQUEST:
      return { applyloading: true };

    case ADMIN_APPLY_SUCCESS:
      return { applyloading: false, data: action.payload };

    case ADMIN_APPLY_FAIL:
      return { applyloading: false, applyerror: action.payload };
    default:
      return state;
  }
};
