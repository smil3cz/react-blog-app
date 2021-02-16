import { useEffect, useState } from "react";
import { getAllArticles } from "../../api/apiArticleHelper.js";
import ArticlesListItem from "../ArticlesListItem/ArticlesListItem";
import "./styles.scss";

const DisplayArticlesList = ({ userLogin }) => {
  const [articles, setArticles] = useState([]);
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await getAllArticles(userLogin.access_token);
    setPagination(response.pagination);
    setArticles(response.items);
  };

  return (
    <section className="articles">
      <header className="articles__header">
        <h1>Recent articles</h1>
      </header>
      <div className="articles__list">
        {!articles || articles.length === 0 ? (
          <p className="article__no-article">
            Sry, there is no article to read!
          </p>
        ) : (
          articles.map((article) => (
            <ArticlesListItem
              key={article.articleId}
              articleData={article}
              userLogin={userLogin}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default DisplayArticlesList;
