import React, { FC, useEffect, useRef } from "react";
import { Article } from "../model/article";

interface Card2Props {
  articles: Article[];
}

const Card2: FC<Card2Props> = ({ articles }) => {
  return (
    <div className="mt-5">
      {articles.map((article, index) => (
        <div
          className="flex sm:flex-row flex-col gap-5 h-3/12 border-b gap-5 py-5"
          key={index}
        >
          <div className="  overflow-hidden">
            <img
              className="sm:w-[424px] sm:h-[240px] w-[80px] h-[45px] object-cover"
              src={article.urlToImage}
              alt="article"
            />
          </div>
          <div className="w-3/4">
            <h2 className="text-[24px] font-bold  text-start	">
              {article.title}
            </h2>
            <p className="text-[16px] font-normal text-start">
              {article.description}
            </p>
            <div className="flex justify-start gap-5 items-center">
              <img
                src={article.urlToImage}
                className="w-10 h-10 rounded-full"
                alt="article"
              />
              <p className="text-[12px] font-bold uppercase">
                {article.author}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card2;
