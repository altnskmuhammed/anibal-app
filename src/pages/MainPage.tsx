import React, { useState, useEffect } from "react";
import HeroComp from "../component/HeroComp";
import SecondComp from "../component/SecondComp";
import BottomComp from "../component/BottomComp";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { setArticles } from "../store/actions/articleActions";
import { getArticles } from "../services/newsService";

const MainPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const articles = useSelector((state: RootState) => state.articles.articles);

  useEffect(() => {
    getArticles()
      .then((filteredArticles) => {
        // Add an id to each article
        const articlesWithId = filteredArticles.map(
          (article: any, index: { toString: () => any }) => ({
            ...article,
            id: index.toString(), // You can use a unique identifier here
          })
        );

        dispatch(setArticles(articlesWithId));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [dispatch]);

  console.log(articles);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeroComp />
      <SecondComp />
      <BottomComp articles={articles.slice(15, 55)} />
    </div>
  );
};

export default MainPage;
