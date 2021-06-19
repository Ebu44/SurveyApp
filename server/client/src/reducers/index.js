import { combineReducers } from "redux";
import { reducer as surveyForm } from "redux-form";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  form: surveyForm,
});
