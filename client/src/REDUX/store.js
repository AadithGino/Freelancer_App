import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userHomeReducer,
  userImageUplaodReducer,
  userLoginReducer,
  userprofilereduer,
  userProjectReducer,
  userSignupReducer,
  userProjectView,
  userProjectDeleteReducer,
  userSingleProjectReducer
} from "./Reducers/userReducer";
import thunk from "redux-thunk";
import {
  adminBlockReducer,
  adminDeleteReducer,
  adminHomeReducer,
  adminLoginReducer,
  adminProjectReducer,
  adminSearchReducer,
  adminSignUpReducer,
} from "./Reducers/adminReducer";
import { adminProjectApply } from "./Reducers/adminReducer";
const reducer = combineReducers({
  userLogin: userLoginReducer,
  userSignup: userSignupReducer,
  userHome: userHomeReducer,
  adminLogin: adminLoginReducer,
  adminHome: adminHomeReducer,
  adminBlock: adminBlockReducer,
  adminDelete: adminDeleteReducer,
  adminSearch: adminSearchReducer,
  userProfile: userprofilereduer,
  userImage: userImageUplaodReducer,
  adminSignup:adminSignUpReducer,
  userProject:userProjectReducer,
  adminProject:adminProjectReducer,
  adminApply:adminProjectApply,
  userProjectView:userProjectView,
  userProjectDelete:userProjectDeleteReducer,
  userSingleProject:userSingleProjectReducer
});

let userinfo = JSON.parse(localStorage.getItem("userInfo"));

const initialstate = {
  userLogin: { userinfo: userinfo },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
