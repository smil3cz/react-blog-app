import { getAllArticles } from "../../api/apiArticleHelper.js";
import { useState, useEffect } from "react";
import ArticlesListItem from "../ArticlesListItem/ArticlesListItem";

const DisplayArticles = ({ userLogin }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArticles();
  }, [articles.length]);

  const fetchArticles = async () => {
    const data = await getAllArticles(userLogin.apiKey, userLogin.accessToken);
    setArticles(data);
  };

  const renderArticles = () => {
    if (articles.length > 0) {
      return articles.map((article) => (
        <ArticlesListItem key={article.articleId} articleData={article} />
      ));
    } else {
      return <p>Sry, no articles yet!</p>;
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
