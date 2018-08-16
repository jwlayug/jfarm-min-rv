import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import testReducer from "../../features/testarea/testReducer";
import modalsReducer from "../../features/modals/modalReducer";
const rootReducer = combineReducers({
  form: FormReducer,
  test: testReducer,
  modals: modalsReducer
});

export default rootReducer;
