import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import articleImage from "./test.jpg";
import "./styles.scss";
import { getArticleDetail } from "../../../api/apiArticleHelper";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

const ArticlesListItem = ({ articleData, userLogin }) => {
  const [articleDetail, setArticleDetail] = useState();
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const response = await getArticleDetail(articleData.articleId);
    setArticleDetail(response);
  };

  const articleTime = () => {
    const now = new Date(articleData.createdAt);
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    };

    const locale = navigator.language;
    return new Intl.DateTimeFormat(locale, options).format(now);
  };

  if (!articleDetail) {
    return <LoadingSpinner />;
  } else {
    return (
      <article className="article">
        <section className="article__image">
          <img src={articleImage} alt="article image" />
        </section>
        <section className="article__content">
          <h4 className="article__headline">{articleData.title}</h4>
          <div className="article__details">
            <p className="article__author">{userLogin.name}</p>
            <p className="article__dot">&diams;</p>
            <p className="article__date">{articleTime()}</p>
          </div>
          <div className="article__perex">{articleData.perex}</div>
          <ul className="article__actions">
            <Link
              className="article__actions-read"
              to={`/articles/${articleData.articleId}`}
            >
              <li>Read whole article</li>
            </Link>
            <li className="article__actions-comments">{`${articleDetail.comments.length} comments`}</li>
          </ul>
        </section>
      </article>
    );
  }
};

export default ArticlesListItem;
