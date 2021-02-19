import AvatarItem from "../../AvatarItem/AvatarItem";
import FormInput from "../../FormComponents/FormInput/FormInput";
import ArticleItemComment from "./ArticleItemComment/ArticleItemComment";
import { addNewComment } from "../../../api/apiArticleHelper";
import { useState } from "react";
import UserOffline from "../../UserOffline/UserOffline";

const ArticleItemComments = ({
  comments,
  userLogin,
  userLogged,
  currentId,
}) => {
  const [commentData, setCommentData] = useState(comments);
  // Add new comment and trigger re-render
  const addComment = async (event) => {
    event.preventDefault();
    const response = await addNewComment({
      articleId: currentId,
      author: userLogin.name,
      content: event.target.userinput.value,
    });
    event.target.userinput.value = "";
    const updatedData = [...commentData, response];
    setCommentData(updatedData);
  };
  //Sort comments from newest, slice to avoid modify original data
  const sortedComments = commentData
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  // Render content based on state of login
  const renderComponents = () => {
    if (!userLogged) {
      return <UserOffline />;
    }
    return (
      <form onSubmit={(e) => addComment(e)} className="article-detail__form">
        <div className="article-detail__avatar">
          <AvatarItem />
        </div>
        <FormInput id="userinput" type="text" size="big" />
      </form>
    );
  };

  return (
    <div className="article-detail__comments">
      <h4>{`Comments (${commentData.length})`}</h4>
      {renderComponents()}
      <div className="article-detail__comments-all">
        {sortedComments.map((comment) => (
          <ArticleItemComment key={comment.commentId} commentData={comment} />
        ))}
      </div>
    </div>
  );
};

export default ArticleItemComments;
