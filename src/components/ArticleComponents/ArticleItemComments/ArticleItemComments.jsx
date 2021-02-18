import AvatarItem from "../../AvatarItem/AvatarItem";
import FormInput from "../../FormComponents/FormInput/FormInput";
import ArticleItemComment from "./ArticleItemComment/ArticleItemComment";
import { addNewComment } from "../../../api/apiArticleHelper";
import { useState } from "react";

const ArticleItemComments = ({ comments, userName, currentId }) => {
  const [commentData, setCommentData] = useState(comments);

  // Add new comment and trigger re-render
  const addComment = async (event) => {
    event.preventDefault();
    const response = await addNewComment({
      articleId: currentId,
      author: userName,
      content: event.target.userinput.value,
    });
    const updatedData = [...commentData, response];
    setCommentData(updatedData);
  };
  //Sort comments from newest, slice to avoid modify original data
  const sortedComments = commentData
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="article-detail__comments">
      <h4>{`Comments (${commentData.length})`}</h4>
      <form onSubmit={(e) => addComment(e)} className="article-detail__form">
        <div className="article-detail__avatar">
          <AvatarItem />
        </div>
        <FormInput id="userinput" type="text" size="big" />
      </form>
      <div className="article-detail__comments-all">
        {sortedComments.map((comment) => (
          <ArticleItemComment key={comment.commentId} commentData={comment} />
        ))}
      </div>
    </div>
  );
};

export default ArticleItemComments;
