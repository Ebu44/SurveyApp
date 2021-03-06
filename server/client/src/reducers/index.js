import { combineReducers } from "redux";
import { reducer as surveyForm } from "redux-form";
import authReducer from "./authReducer";
import surveysReducer from "./surveysReducer";

export default combineReducers({
  auth: authReducer,
  form: surveyForm,
  surveys: surveysReducer,
});
