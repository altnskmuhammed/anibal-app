import { createStore, combineReducers } from "redux";
import articleReducer from "./reducers/articleReducers";

const rootReducer = combineReducers({
  articles: articleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
