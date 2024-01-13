import { Article } from "../model/article";
import api from "./api";

export const getArticles = async () => {
  try {
    const currentDate = new Date();

    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);

    const formattedDate = `${yesterday.getFullYear()}-${(
      yesterday.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${yesterday.getDate().toString().padStart(2, "0")}`;

    const response = await api.get("everything", {
      params: {
        q: "tesla",
        from: formattedDate,
        sortBy: "publishedAt",
        apiKey: "979e531681bc408dbfe50246e6b72d9b",
        language: "en",
      },
    });
    const filteredArticles = response.data.articles.filter(
      (article: Article) =>
        article.author !== null && article.urlToImage !== null
    );
    return filteredArticles;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};
