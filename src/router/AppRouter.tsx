// AppRoutes.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Layout from "../layout/Layout";
import ArticleDetails from "../pages/ArticleDetails";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/articles/:articleId" element={<ArticleDetails />} />
        </Routes>{" "}
      </Layout>
    </Router>
  );
};

export default AppRouter;
