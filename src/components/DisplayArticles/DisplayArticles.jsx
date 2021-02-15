import { getAllArticles } from "../../api/apiArticleHelper.js";
import { useState, useEffect } from "react";
import ArticlesListItem from "../ArticlesListItem/ArticlesListItem";
import "./styles.scss";

const DisplayArticles = ({ userLogin }) => {
  const fetchArticles = async () => {
    if (localStorage.getItem("articles")) {
      setArticles(JSON.parse(localStorage.getItem("articles")));
    } else {
      const data = await getAllArticles(
        userLogin.apiKey,
        userLogin.accessToken
      );
      localStorage.setItem("articles", JSON.stringify(data));
      console.log(data);
      setArticles(data);
    }
  };

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArticles();
  }, []);

  const renderArticles = () => {
    console.log(articles.items);
    if (articles.items.length > 0) {
      return articles.items.map((article) => (
        <ArticlesListItem
          key={article.articleId}
          articleData={article}
          userData={userLogin}
        />
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
