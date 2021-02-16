import axios from "axios";

const getAllArticles = async (acessKey) => {
  const apiArticleUrl = "https://fullstack.exercise.applifting.cz/articles";
  const options = {
    method: "GET",
    headers: {
      "X-API-KEY": localStorage.getItem("apiKey"),
      Authorization: acessKey,
      "Content-type": "application/json",
    },
  };

  try {
    const { data } = await axios.get(apiArticleUrl, options);
    return data;
  } catch (error) {
    console.log(`Error fetching data - ${error.message}`);
  }
};

const saveNewArticle = async (articleData) => {
  const apiArticleUrl = "https://fullstack.exercise.applifting.cz/articles";
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const options = {
    method: "POST",
    headers: {
      "X-API-KEY": localStorage.getItem("apiKey"),
      Authorization: accessToken.access_token,
      "Content-type": "application/json",
    },
  };

  try {
    await axios.post(apiArticleUrl, articleData, options);
  } catch (error) {
    console.log(`Error fetching data - ${error.message}`);
  }
};

const getArticleDetail = async (articleId) => {
  const apiArticleUrl = `https://fullstack.exercise.applifting.cz/articles/${articleId}`;
  const options = {
    method: "GET",
    headers: {
      "X-API-KEY": localStorage.getItem("apiKey"),
      "Content-type": "application/json",
    },
  };

  try {
    const { data } = await axios.get(apiArticleUrl, options);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export { getAllArticles, saveNewArticle, getArticleDetail };
