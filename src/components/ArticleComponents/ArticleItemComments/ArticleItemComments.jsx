import AvatarItem from "../../AvatarItem/AvatarItem";
import FormInput from "../../FormComponents/FormInput/FormInput";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

const ArticleItemComments = (props) => {
  console.log(props);
  if (!props) {
    return <LoadingSpinner />;
  } else if (props) {
    return (
      <div className="article-detail__comments">
        <h4>{`Comments (${props?.articleDetail?.comments.length})`}</h4>
        <form className="article-detail__form">
          <AvatarItem />
          <FormInput />
        </form>
      </div>
    );
  }
};

export default ArticleItemComments;
