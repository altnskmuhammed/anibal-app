// src/store/actions/articleActions.ts

import { Article } from "../../model/article";

export const setArticles = (articles: Article[]) => {
  return {
    type: "SET_ARTICLES" as const,
    payload: articles,
  };
};

export type ArticleActionTypes = ReturnType<typeof setArticles>;
