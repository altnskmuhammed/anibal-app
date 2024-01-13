import React, { FC, useEffect, useRef } from "react";
import { Article } from "../model/article";
import Card1 from "./Card1";

interface BottomMıddleCardProps {
  articles: Article[];
}

const BottomMıddleCard: FC<BottomMıddleCardProps> = ({ articles }) => {
  return (
    <>
      {" "}
      {articles.map((article, index) => (
        <div
          className="flex flex-col justify-center border-t border-b py-10 gap-5 pr-10 h-3/12"
          key={index}
        >
          <img
            className="sm:w-full sm:h-[400px]  w-[80px] h-[45px]"
            src={article.urlToImage}
            alt="article"
          />
          <div>
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
    </>
  );
};

export default BottomMıddleCard;
