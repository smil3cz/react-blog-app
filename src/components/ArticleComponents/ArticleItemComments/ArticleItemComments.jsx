import AvatarItem from "../../AvatarItem/AvatarItem";
import FormInput from "../../FormComponents/FormInput/FormInput";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

const ArticleItemComments = ({ articleDetail }) => {
  if (!articleDetail) {
    return <LoadingSpinner />;
  } else if (articleDetail) {
    return (
      <div className="article-detail__comments">
        <h4>{`Comments (${articleDetail.comments.length})`}</h4>
        <form className="article-detail__form">
          <AvatarItem />
          <FormInput />
        </form>
      </div>
    );
  }
};

export default ArticleItemComments;
