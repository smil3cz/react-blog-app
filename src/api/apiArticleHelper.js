import axios from "axios";

const getAllArticles = async () => {
  const apiArticleUrl = "https://fullstack.exercise.applifting.cz/articles";
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const options = {
    method: "GET",
    headers: {
      "X-API-KEY": localStorage.getItem("apiKey"),
      Authorization: accessToken.access_token,
      "Content-type": "application/json",
    },
  };

  try {
    const { data } = await axios.get(apiArticleUrl, options);
    localStorage.setItem("articles", JSON.stringify(data));
  } catch (error) {
    console.log(`Error fetching data - ${error.message}`);
  }
};

const saveNewArticle = async (articleData) => {
  const apiArticleUrl = "https://fullstack.exercise.applifting.cz/articles";
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const options = {
    required: "true",
    method: "POST",
    headers: {
      "X-API-KEY": localStorage.getItem("apiKey"),
      Authorization: accessToken.access_token,
      "Content-type": "application/json",
    },
  };

  try {
    const { data } = await axios.post(apiArticleUrl, articleData, options);
    return data;
  } catch (error) {
    console.log(`Error fetching data - ${error.message}`);
  }
};

export { getAllArticles, saveNewArticle };
