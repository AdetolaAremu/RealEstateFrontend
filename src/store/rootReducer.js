import { combineReducers } from "redux";
import usersReducer from "../Pages/PublicPost/actions/reducer"

export default combineReducers({
  users:usersReducer
});