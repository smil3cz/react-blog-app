import AvatarItem from "../../../AvatarItem/AvatarItem";
import { addVote, substractVote } from "../../../../api/apiArticleHelper";
import { getTimeStamp } from "./timeDiff";
import IconDown from "./svg/down.svg";
import IconUp from "./svg/up.svg";
import "./styles.scss";
import { useState } from "react";

const ArticleItemComment = ({ commentData }) => {
  const [comment, setComment] = useState(commentData);
  const sendVote = async (event) => {
    if (event.target.id === "up") {
      const response = await addVote(comment.commentId);
      setComment(response);
    } else if (event.target.id === "down") {
      const response = await substractVote(comment.commentId);
      setComment(response);
    }
  };

  return (
    <div className="comment-container">
      <div className="comment-container__avatar-section">
        <AvatarItem />
      </div>
      <div className="comment-container__content">
        <header className="comment-container__header">
          <p className="comment-container__header-name">{comment.author}</p>
          <p className="comment-container__header-time">
            {getTimeStamp(comment.createdAt)}
          </p>
        </header>
        <div className="comment-container__message">
          <p>{comment.content}</p>
        </div>
        <div className="comment-container__votes">
          <p className="comment-container__counter">
            {comment.score > 0 ? `+${comment.score}` : comment.score}
          </p>
          <div>
            <img
              onClick={(e) => sendVote(e)}
              className="comment-container__up"
              id="up"
              src={IconUp}
            />
          </div>
          <div>
            <img
              onClick={(e) => sendVote(e)}
              className="comment-container__down"
              id="down"
              src={IconDown}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItemComment;
