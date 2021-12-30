import { combineReducers } from "redux";
import usersReducer from "../Pages/PublicPost/actions/reducer";
import authReducer from "../Pages/AuthPages/actions/reducer";
import layoutReducer from "../layouts/actions/reducer";
import indexReducer from "../Pages/Dashboard/Home/actions/reducer";
import postReducer from "../Pages/Dashboard/Post/actions/reducer";

export default combineReducers({
  users: usersReducer,
  allAuths: authReducer,
  layouts: layoutReducer,
  dashboard: indexReducer,
  posts: postReducer
});