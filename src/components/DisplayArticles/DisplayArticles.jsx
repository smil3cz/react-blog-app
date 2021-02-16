import { useEffect } from "react";
import { getAllArticles } from "../../api/apiArticleHelper.js";
import ArticlesListItem from "../ArticlesListItem/ArticlesListItem";
import "./styles.scss";

const DisplayArticles = () => {
  useEffect(async () => {
    await getAllArticles();
  });

  const renderArticles = () => {
    const articles = JSON.parse(localStorage.getItem("articles"));
    if (articles.items.length > 0) {
      return articles.items.map((article) => (
        <ArticlesListItem key={article.articleId} articleData={article} />
      ));
    } else {
      return <p>Sry, there is no article to read!</p>;
    }
  };
  return (
    <section className="articles">
      <header className="articles__header">
        <h1>Recent articles</h1>
      </header>
      <div className="articles__list">{renderArticles()}</div>
    </section>
  );
};

export default DisplayArticles;
