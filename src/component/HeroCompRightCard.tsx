import React, { FC, useEffect, useRef } from "react";
import { Article } from "../model/article";
import Card1 from "./Card1";
import { useNavigate } from "react-router-dom";

interface HeroCompRightCardProps {
  articles: Article[];
}

const HeroCompRightCard: FC<HeroCompRightCardProps> = ({ articles }) => {
  const navigate = useNavigate();
  const handleArticleClick = (articleId: string) => {
    // Navigate to the article details page or a specific route based on your application structure.
    navigate(`/articles/${articleId}`);
  };
  return (
    <div className="flex flex-col sm:gap-5 gap-10">
      {articles.map((article, index) => (
        <div
          className={
            index === 4
              ? "flex flex-1  justify-center items-start flex-col py-5 gap-2 px-5 hover:cursor-pointer hover:shadow-lg py-5"
              : "flex flex-1 border-b justify-center items-start py-5 flex-col gap-2 px-5 hover:cursor-pointer hover:shadow-lg py-5"
          }
          onClick={() => handleArticleClick(article.id)}
          key={index}
        >
          <div className="flex gap-5 items-center">
            <div className="text-[#BFC3C9] text-[48px] font-normal">
              {index + 1}
            </div>
            <div>
              <h2 className="text-[16px]  text-start	">{article.title}</h2>

              <p className="text-[12px] font-bold text-start uppercase">
                {article.author}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCompRightCard;
