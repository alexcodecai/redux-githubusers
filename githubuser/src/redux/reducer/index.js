import { combineReducers } from "redux";
import users from "./users";
import usersDetail from "./usersDetail";

const reducers = combineReducers({
  users,
  usersDetail
});

export default reducers;
