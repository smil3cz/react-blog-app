import AvatarItem from "../../../AvatarItem/AvatarItem";
import { getTimeStamp } from "./timeDiff";
import IconDown from "./svg/down.svg";
import IconUp from "./svg/up.svg";
import "./styles.scss";

const ArticleItemComment = ({ commentData, votingSystem }) => {
  const vote = (e) => {
    votingSystem(e.target.id, commentData.commentId);
  };

  return (
    <div className="comment-container">
      <div className="comment-container__avatar-section">
        <AvatarItem />
      </div>
      <div className="comment-container__content">
        <header className="comment-container__header">
          <p className="comment-container__header-name">{commentData.author}</p>
          <p className="comment-container__header-time">
            {getTimeStamp(commentData.createdAt)}
          </p>
        </header>
        <div className="comment-container__message">
          <p>{commentData.content}</p>
        </div>
        <div className="comment-container__votes">
          <p className="comment-container__counter">
            {commentData.score > 0
              ? `+${commentData.score}`
              : commentData.score}
          </p>
          <div>
            <img
              onClick={(e) => vote(e)}
              className="comment-container__up"
              id="up"
              src={IconUp}
            />
          </div>
          <div>
            <img
              onClick={(e) => vote(e)}
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
