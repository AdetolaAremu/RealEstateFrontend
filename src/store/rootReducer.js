import { combineReducers } from "redux";
import usersReducer from "../Pages/PublicPost/actions/reducer";
import authReducer from "../Pages/AuthPages/actions/reducer";
import layoutReducer from "../layouts/actions/reducer";
import indexReducer from "../Pages/Dashboard/Home/actions/reducer";
import postReducer from "../Pages/Dashboard/Post/actions/reducer";
import profileReducer from "../Pages/Dashboard/Profile/actions/reducer";
import statsReducer from "../Helpers/stats/index";

export default combineReducers({
  users: usersReducer,
  stats: statsReducer,
  allAuths: authReducer,
  layouts: layoutReducer,
  dashboard: indexReducer,
  posts: postReducer,
  profile: profileReducer
});