import { Fragment, useState, useEffect } from "react";
import { getAllArticles } from "../../../api/apiArticleHelper";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import RelatedArticleItem from "../RelatedArticleItem/RelatedArticleItem";

const RelatedArticles = ({ currentId }) => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await getAllArticles();
    setArticles(response.items);
  };

  const filteredArticles = articles
    .filter((article) => article.articleId !== currentId)
    .splice(0, 6);

  const renderRelatedArticles = () => {
    return filteredArticles.map((article, index) => {
      if (index === 4) {
        return;
      } else {
        return (
          <RelatedArticleItem key={article.articleId} articleData={article} />
        );
      }
    });
  };

  if (!currentId || !articles) {
    return <LoadingSpinner />;
  } else {
    return (
      <Fragment>
        <header className="related-article__header">
          <h4>Related articles</h4>
        </header>
        <div>{renderRelatedArticles()}</div>
      </Fragment>
    );
  }
};

export default RelatedArticles;
