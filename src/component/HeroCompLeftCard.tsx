import React, { FC, useEffect, useState } from "react";
import { Article } from "../model/article";
import { useNavigate } from "react-router-dom";

interface HeroCompLeftCardProps {
  articles: Article[];
}

const HeroCompLeftCard: FC<HeroCompLeftCardProps> = ({ articles }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      setScreenWidth(windowWidth);
    }

    // Event listener'i eklemek için component mount edildiğinde yapılması gerekenler
    window.addEventListener("resize", handleResize);

    // Component kaldırıldığında event listener'i temizle
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that this effect only runs on mount and unmount
  const handleArticleClick = (articleId: string) => {
    // Navigate to the article details page or a specific route based on your application structure.
    navigate(`/articles/${articleId}`);
  };
  return (
    <div
      className={
        screenWidth > 921
          ? "flex-1 flex wrap border-r border-gray-300  p-2"
          : "flex-1 flex wrap  border-b border-black p-2"
      }
    >
      {articles.map((article, index) => (
        <div
          className="w-full h-fit hover:cursor-pointer hover:shadow-lg py-5		"
          onClick={() => handleArticleClick(article.id)}
          key={index}
        >
          <img
            className="w-full xl:h-[24rem] lg:h-1/4 md:h-3/6  h-1/6 "
            src={article.urlToImage}
            alt="article"
          />
          <h2 className="lg:text-[42px] text-[36px] font-bold md:uppercase text-start	">
            {article.title}
          </h2>
          <p className="text-[18px] font-normal text-start">
            {article.description}
          </p>
          <div className="flex justify-start gap-5 items-center">
            <img
              src={article.urlToImage}
              className="w-10 h-10 rounded-full"
              alt="article"
            />
            <p className="text-[12px] font-bold uppercase">{article.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCompLeftCard;
