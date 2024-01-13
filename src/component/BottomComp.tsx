import React, { FC, useEffect, useRef } from "react";
import { Article } from "../model/article";
import Card2 from "./Card2";
import BottomMıddleCard from "./BottomMıddleCard";

interface BottomCompProps {
  articles: Article[];
}

const BottomComp: FC<BottomCompProps> = ({ articles }) => {
  return (
    <div className="mt-5 border-t pt-5 flex md:mx-10 mx-0 md:px-0 px-5  ">
      <div className="md:w-9/12 w-full flex flex-col gap-5  md:px-10 px-0 border-r ">
        <Card2 articles={articles.slice(0, 1)} />
        <Card2 articles={articles.slice(3, 4)} />
        <BottomMıddleCard articles={articles.slice(4, 5)} />
        <Card2 articles={articles.slice(5, 6)} />
        <Card2 articles={articles.slice(6, 7)} />
      </div>
      <div className="md:w-3/12 p-5 h-full md:flex hidden justify-start pl-5 items-start">
        {articles.slice(1, 2).map((article, index) => (
          <div className=" pl-2 pr-1 xl:pr-10 " key={index}>
            <img
              className="w-full h-[10rem] "
              src={article.urlToImage}
              alt="article"
            />
            <h2 className="text-[20px] font-bold  text-start	">
              {article.title}
            </h2>
            <p className="text-[14px] font-normal text-start">
              {article.description}
            </p>
            <div className="flex justify-start gap-5 items-center">
              <img
                src={article.urlToImage}
                className="w-10 h-10 rounded-full"
                alt="article"
              />
              <p className="text-[12px] font-bold uppercase">
                {article?.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomComp;
