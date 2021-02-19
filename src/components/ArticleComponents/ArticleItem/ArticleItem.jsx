import placeHolderImage from "../../../assets/images/placeholder.png";
import { getArticleDetail, downloadImage } from "../../../api/apiArticleHelper";
import { useEffect, useState } from "react";
import RelatedArticles from "../RelatedArticles/RelatedArticles";
import ArticleItemComments from "../ArticleItemComments/ArticleItemComments";
import "./styles.scss";

const ArticleItem = (props) => {
  const id = props.match.params.articleId;
  const [articleDetail, setArticleDetail] = useState({});
  const [image, setImage] = useState(null);

  const loadArticleData = async () => {
    const response = await getArticleDetail(id);
    setArticleDetail(response);
    if (response.imageId === null) return;
    const imageDownload = await downloadImage(response.imageId);
    setImage(imageDownload);
  };

  useEffect(() => {
    loadArticleData();
  }, [id]);

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
        {articleDetail.hasOwnProperty("comments") && (
          <ArticleItemComments
            comments={articleDetail.comments}
            userName={props.userLogin.name}
            currentId={id}
          />
        )}
      </section>
      <section className="article-detail__sidebar">
        <RelatedArticles currentId={id} />
      </section>
    </article>
  );
};

export default ArticleItem;
