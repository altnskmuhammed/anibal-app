// src/store/reducers/articleReducers.ts

import { Article } from "../../model/article";

interface ArticleState {
  articles: Article[]; // Assuming 'articles' is the slice you're interested in
}

const initialState: ArticleState = {
  articles: [],
};

const articleReducer = (state: ArticleState = initialState, action: any) => {
  switch (action.type) {
    case "SET_ARTICLES":
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};

export default articleReducer;
