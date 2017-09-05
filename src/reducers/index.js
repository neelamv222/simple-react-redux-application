import { combineReducers } from "redux";
import RepositoriesListReducer from "./repositoryReducer"

import BtnTextReducer from "./buttonReducer"

const allReducers = combineReducers({
    RepositoriesListReducer,
    BtnTextReducer
}); 

export default allReducers;