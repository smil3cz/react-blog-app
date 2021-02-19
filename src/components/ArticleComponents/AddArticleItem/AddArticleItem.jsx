import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  saveNewArticle,
  getAllArticles,
  uploadImage,
  downloadImage,
} from "../../../api/apiArticleHelper.js";
import FormButton from "../../FormComponents/FormButton/FormButton";
import FormInput from "../../FormComponents/FormInput/FormInput.jsx";
import FormLabel from "../../FormComponents/FormLabel/FormLabel";
import "./styles.scss";

const AddArticleItem = () => {
  const [image, setImage] = useState(null);
  let history = useHistory();

  const addNewArticle = async (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append("image", image);
    formData.append("name", image.name);
    const [imageId] = await uploadImage(formData);
    setImage(imageId);
    const articleData = {
      title: event.target.title.value,
      perex:
        event.target.input.value.length <= 250
          ? event.target.input.value.slice(0)
          : event.target.input.value.slice(0, 250),
      content: event.target.input.value,
      imageId: imageId.imageId,
    };
    console.log(articleData);
    await saveNewArticle(articleData);
    await getAllArticles();
    history.push("/articles");
  };

  const handleImageFile = (e) => {
    setImage(e.target.files[0]);
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
        <label className="create-article__file-upload">
          <input
            type="file"
            name="picture"
            onChange={(e) => handleImageFile(e)}
          />
          Featured image
        </label>
        <FormLabel id="input">Content</FormLabel>
        <textarea rows="40" id="input" required></textarea>
      </section>
    </form>
  );
};

export default AddArticleItem;
