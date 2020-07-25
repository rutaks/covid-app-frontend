import { initialState } from "../../store/initialStates/";
import loginReducer from "./loginReducer";
import clearUserStoreReducer from "./clearUserStoreReducer";

/**
 * A function that provides reducer based on action currently being used
 * @param {Object} state - the current state being used, by default is the user state
 * @param {Object} action - action type to be applied
 * @since version 1.0
 */
export default (state = initialState.user, action) => {
  const clearUserStore = clearUserStoreReducer(state, action);
  const login = loginReducer(state, action);
  return clearUserStore || login || state;
};
