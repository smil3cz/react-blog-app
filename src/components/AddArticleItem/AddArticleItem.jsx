import { addNewArticle } from "..//../api/apiArticleHelper.js";
import FormButton from "../FormButton/FormButton";
import FormInput from "../FormInput/FormInput.jsx";
import FormLabel from "../FormLabel/FormLabel";
import "./styles.scss";

const AddArticleItem = () => {
  const data = {
    title: "First article",
    perex: "Some stuff from first article",
    content: `They must be delivered safely or other star systems will suffer the same fate as Alderaan. Your destiny lies along a different path than mine. The Force will be with you...always! Boy you said it, Chewie. Where did you dig up that old fossil? Ben is a great man. Yeah, great at getting us into trouble. I didn't hear you give any ideas... Well, anything would be better than just hanging around waiting for him to pick us up... Who do you think...`,
  };
  // addNewArticle(data);
  return (
    <form className="create-article">
      <header className="create-article__header">
        <h1>Create new article</h1>
        <FormButton color="primary" type="submit">
          Publish Article
        </FormButton>
      </header>
      <section className="create-article__content">
        <FormLabel id="title">Article Title</FormLabel>
        <FormInput id="title" type="text" size="big" />
        <FormLabel>Upload an Image</FormLabel>
        <FormButton color="secondary" type="button" position="start">
          Featured image
        </FormButton>
        <FormLabel id="input">Content</FormLabel>
        <textarea rows="40" id="input" required></textarea>
      </section>
    </form>
  );
};

export default AddArticleItem;
