import { Link } from "react-router-dom";

const RelatedArticleItem = ({ articleData }) => {
  return (
    <div className="article-detail__item">
      <Link to={`/articles/${articleData.articleId}`}>
        <h6>{articleData.title}</h6>
      </Link>

      <p>{articleData.perex}</p>
    </div>
  );
};

export default RelatedArticleItem;
