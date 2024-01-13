import React, { FC, useEffect, useRef } from "react";
import { Article } from "../model/article";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Card1: FC = () => {
  const articles = useSelector((state: RootState) => state.articles.articles);
  return (
    <div className="mt-5">
      {articles.slice(13, 14).map((article: Article, index: number) => (
        <div className="h-[400px] w-full relative" key={index}>
          <img
            className="w-full h-full object-cover "
            src={
              "https://s3-alpha-sig.figma.com/img/0843/9173/bec4247981f943479bc3d92b709f49be?Expires=1697414400&Signature=J7jef0kF~o6aRdjYNKtEiK04JGUMTyQWm5dtDq2c9uNlFq9J~Hfw56YdP25yh9q7CH-lII7OIb-l15cKaAQjMcb7z3OlvvbaaOD0DSwAYYOJUrbVYTwP29Rw~6QOlkWaidpJ0bXHxVi6D38CGzQK-v-aJqWsuvfrfSPWzFnhnP7NpsQUUV2Cm0HVLAJIJt~dIUXMvmdm8Xj2qqX~IdTJ6yZFaFyatt7oRC7NwxAkcmvx0sn2LSdV1yA6QGqk9L0V2juQwaGkg0582EFSNeiCsL-PuSHTb6N5Xk7QdIYQT5vOpCS8AL-eks7a~6gFxsBnlgp3Akb2BwJijR0lBsR6ew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
            alt="article"
          />

          <div className=" bg-black absolute xsm:top-[5rem] xsm:left-[5rem] bottom-0 left-0 xsm:w-1/2 w-full  xsm:mx-5 xsm:my-10 my-0 mx-0 h-fit mt-10 py-10 px-5 ">
            <h2 className="lg:text-[28px] text-[18px] text-white font-bold  text-start	">
              {article.title}
            </h2>

            <div className="flex justify-start gap-5 items-center">
              <img
                src={article.urlToImage}
                className="w-10 h-10 rounded-full"
                alt="article"
              />
              <p className="text-[12px] font-bold text-white uppercase">
                {article.author}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card1;
