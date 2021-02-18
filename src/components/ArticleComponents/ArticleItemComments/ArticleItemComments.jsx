import AvatarItem from "../../AvatarItem/AvatarItem";
import FormInput from "../../FormComponents/FormInput/FormInput";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import ArticleItemComment from "./ArticleItemComment/ArticleItemComment";

const ArticleItemComments = ({ articleDetail, votingSystem, addComment }) => {
  console.log(articleDetail.comments);
  const handleAddingComments = (e) => {
    e.preventDefault();
    addComment(e.target.userinput.value);
  };

  if (!articleDetail) {
    return <LoadingSpinner />;
  } else if (articleDetail) {
    return (
      <div className="article-detail__comments">
        <h4>{`Comments (${articleDetail.comments.length})`}</h4>
        <form
          onSubmit={(e) => handleAddingComments(e)}
          className="article-detail__form"
        >
          <div className="article-detail__avatar">
            <AvatarItem />
          </div>
          <FormInput id="userinput" type="text" size="big" />
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
