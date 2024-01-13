// ArticleDetails.jsx
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../store";
import { Article } from "../model/article";

const ArticleDetails = () => {
  const { articleId } = useParams();
  const articles = useSelector((state: RootState) => state.articles.articles);
  // Fetch the article details based on articleId and render the content
  // ...

  const selectedArticle: Article = articles.find(
    (article: { id: string | undefined }) => article.id === articleId
  );
  console.log("nn", selectedArticle);
  return (
    <div className="flex  flex-col gap-1 md:mx-40 mx-0 border-b p-4 justify-center items-center">
      <div className="w-1/2 h-1/2  overflow-hidden">
        <img
          src={selectedArticle.urlToImage}
          alt={selectedArticle.title}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <p>{selectedArticle.description}</p>
      {/* Render other details of the article */}
    </div>
  );
};

export default ArticleDetails;
