import AvatarItem from "../../AvatarItem/AvatarItem";
import FormInput from "../../FormComponents/FormInput/FormInput";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import ArticleItemComment from "./ArticleItemComment/ArticleItemComment";

const ArticleItemComments = ({ articleDetail, votingSystem }) => {
  if (!articleDetail) {
    return <LoadingSpinner />;
  } else if (articleDetail) {
    return (
      <div className="article-detail__comments">
        <h4>{`Comments (${articleDetail.comments.length})`}</h4>
        <form className="article-detail__form">
          <div className="article-detail__avatar">
            <AvatarItem />
          </div>
          <FormInput type="text" size="big" />
        </form>
        {/* Container for user comments */}
        <div className="article-detail__comments-all">
          {articleDetail.comments.map((comment) => (
            <ArticleItemComment
              key={comment.commentId}
              commentData={comment}
              votingSystem={votingSystem}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default ArticleItemComments;
