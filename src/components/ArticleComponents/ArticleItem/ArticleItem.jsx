import articleImage from "./test.jpg";
import {
  addNewComment,
  addVote,
  getArticleDetail,
  substractVote,
} from "../../../api/apiArticleHelper";
import { useEffect, useState } from "react";
import RelatedArticles from "../RelatedArticles/RelatedArticles";
import ArticleItemComments from "../ArticleItemComments/ArticleItemComments";
import "./styles.scss";

const ArticleItem = (props) => {
  const [articleDetail, setArticleDetail] = useState({});
  const [isVoted, setIsVoted] = useState(false);
  const id = props.match.params.articleId;

  useEffect(() => {
    loadArticleData();
    setIsVoted(false);
  }, [id, isVoted]);

  const loadArticleData = async () => {
    const response = await getArticleDetail(id);
    setArticleDetail(response);
  };

  const articleTime = () => {
    const now = new Date();
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    const locale = navigator.language;
    return new Intl.DateTimeFormat(locale, options).format(now);
  };

  const votingSystem = (voteType, commentId) => {
    if (voteType === "up") {
      addVote(commentId);
      setIsVoted(true);
    } else if (voteType === "down") {
      substractVote(commentId);
      setIsVoted(true);
    }
  };

  const addComment = (userInput) => {
    addNewComment({
      articleId: articleDetail.articleId,
      author: props.userLogin.name,
      content: userInput,
    });
  };

  return (
    <article className="article-detail">
      <section className="article-detail__detail">
        <header className="article-detail__header">
          <h1>{articleDetail.title}</h1>
          <div className="article-detail__informations">
            <p className="article-detail__author">{props.userLogin.name}</p>
            <p className="article-detail__divider">&diams;</p>
            <p className="article-detail__date">{articleTime()}</p>
          </div>
        </header>
        <img src={articleImage} alt="Article Image" />
        <div className="article-detail__text">{articleDetail.content}</div>
        {articleDetail.hasOwnProperty("comments") && (
          <ArticleItemComments
            articleDetail={articleDetail}
            userName={props.userLogin.name}
            votingSystem={votingSystem}
            addComment={addComment}
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
