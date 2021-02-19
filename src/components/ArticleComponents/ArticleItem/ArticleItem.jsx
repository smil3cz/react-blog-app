import placeHolderImage from "../../../assets/images/placeholder.png";
import { getArticleDetail, downloadImage } from "../../../api/apiArticleHelper";
import { useEffect, useState } from "react";
import RelatedArticles from "../RelatedArticles/RelatedArticles";
import ArticleItemComments from "../ArticleItemComments/ArticleItemComments";
import "./styles.scss";
import { useParams } from "react-router-dom";
import UserOffline from "../../UserOffline/UserOffline";

const ArticleItem = (props) => {
  const [articleDetail, setArticleDetail] = useState({});
  const [image, setImage] = useState(null);
  let { articleId } = useParams();

  const loadArticleData = async () => {
    const response = await getArticleDetail(articleId);
    setArticleDetail(response);
    if (response.imageId === null) return;
    const imageDownload = await downloadImage(response.imageId);
    setImage(imageDownload);
  };

  useEffect(() => {
    loadArticleData();
  }, [articleId]);

  const articleTime = () => {
    const now = new Date(articleDetail.createdAt).getTime();
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    };

    const locale = navigator.language;
    return new Intl.DateTimeFormat(locale, options).format(now);
  };

  const renderComments = () => {
    if (props.userLogin.name && articleDetail.hasOwnProperty("comments")) {
      return (
        <ArticleItemComments
          comments={articleDetail.comments}
          userName={props.userLogin.name}
          currentId={articleId}
        />
      );
    } else {
      return <UserOffline />;
    }
  };

  return (
    <article className="article-detail">
      <section className="article-detail__detail">
        <header className="article-detail__header">
          <h1>{articleDetail.title}</h1>
          <div className="article-detail__informations">
            <p className="article-detail__divider">Published</p>
            <p className="article-detail__date">
              {articleDetail.hasOwnProperty("createdAt") && articleTime()}
            </p>
          </div>
        </header>
        <img
          src={image === null ? placeHolderImage : image}
          alt="Article Image"
        />
        <div className="article-detail__text">{articleDetail.content}</div>
        {renderComments()}
        {/* {articleDetail.hasOwnProperty("comments") && props.userLogin.name && (
          <ArticleItemComments
            comments={articleDetail.comments}
            userName={props.userLogin.name}
            currentId={articleId}
          />
        )} */}
      </section>
      <section className="article-detail__sidebar">
        <RelatedArticles currentId={articleId} />
      </section>
    </article>
  );
};

export default ArticleItem;
