import { useEffect, useState } from "react";
import { getAllArticles } from "../../../api/apiArticleHelper.js";
import ArticlesListItem from "../ArticlesListItem/ArticlesListItem";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner.jsx";
import "./styles.scss";

const DisplayArticlesList = ({ userLogin }) => {
  const [articles, setArticles] = useState();
  const [pagination, setPagination] = useState();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const articleList = await getAllArticles();
    setPagination(articleList.pagination);
    setArticles(articleList.items);
  };

  if (!articles) {
    return <LoadingSpinner />;
  } else {
    return (
      <section className="articles">
        <header className="articles__header">
          <h1>Recent articles</h1>
        </header>
        <div className="articles__list">
          {articles.length === 0 ? (
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
  }
};

export default DisplayArticlesList;
