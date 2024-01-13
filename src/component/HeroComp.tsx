import React, { FC, useEffect, useRef } from "react";
import { Article } from "../model/article";
import HeroCompLeftCard from "./HeroCompLeftCard";
import HeroCompMiddleCard from "./HeroCompMiddleCard";
import HeroCompRightCard from "./HeroCompRightCard";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const HeroComp: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const articles = useSelector((state: RootState) => state.articles.articles);

  useEffect(() => {
    const lazyImages = containerRef.current?.querySelectorAll(
      "img[data-src]"
    ) as NodeListOf<HTMLImageElement>;

    if (lazyImages) {
      lazyImages.forEach((img) => {
        img.src = img.dataset.src || "";
      });
    }
  }, [articles]);

  return (
    <div
      ref={containerRef}
      className="flex md:flex-row flex-col gap-1 md:mx-20 mx-0 border-b p-4"
    >
      <HeroCompLeftCard articles={articles.slice(0, 1)} />
      <div className="flex-1 flex sm:flex-row flex-col gap-1 md:mt-0 mt-10">
        <HeroCompMiddleCard articles={articles.slice(2, 4)} />
        <div className="flex-1 flex flex-col sm:mt-0 mt-10 gap-2 ">
          <p className="uppercase text-[16px] font-bold text-start mx-10 leading-6	">
            Popular
          </p>
          <HeroCompRightCard articles={articles.slice(3, 8)} />
        </div>
      </div>
    </div>
  );
};

export default HeroComp;
