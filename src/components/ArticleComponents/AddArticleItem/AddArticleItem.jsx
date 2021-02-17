import { useHistory } from "react-router-dom";
import {
  saveNewArticle,
  getAllArticles,
} from "../../../api/apiArticleHelper.js";
import FormButton from "../../FormComponents/FormButton/FormButton";
import FormInput from "../../FormComponents/FormInput/FormInput.jsx";
import FormLabel from "../../FormComponents/FormLabel/FormLabel";
import "./styles.scss";

const AddArticleItem = () => {
  let history = useHistory();
  const addNewArticle = async (event) => {
    event.preventDefault();
    const articleData = {
      title: event.target.title.value,
      perex:
        event.target.input.value.length <= 250
          ? event.target.input.value.slice(0)
          : event.target.input.value.slice(0, 250),
      content: event.target.input.value,
    };

    await saveNewArticle(articleData);
    await getAllArticles();
    history.push("/articles");
  };

  return (
    <form onSubmit={(e) => addNewArticle(e)} className="create-article">
      <header className="create-article__header">
        <h1>Create new article</h1>
        <FormButton color="primary" type="submit">
          Publish Articles
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
