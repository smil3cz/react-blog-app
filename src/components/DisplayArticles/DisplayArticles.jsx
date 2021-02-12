import { getAllArticles } from "../../api/apiArticleHelper.js";
import { useState, useEffect } from "react";

const DisplayArticles = ({ userLogin }) => {
  useEffect(() => {
    loadArticles();
  }, []);
  const [articles, setArticles] = useState([]);
  const loadArticles = async () => {
    const data = await getAllArticles(userLogin.apiKey, userLogin.accessToken);
    setArticles(data);
  };

  return (
    <section className="articles">
      <header className="articles__header">
        <h1>Recent articles</h1>
      </header>
      <div className="articles__list">
        {articles.length > 0
          ? `We have ${articles.length} articles`
          : `Sry, no articles yet!`}
      </div>
    </section>
  );
};

export default DisplayArticles;
