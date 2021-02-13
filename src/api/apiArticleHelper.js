import axios from "axios";

Storage.prototype.setItem = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getItem = function (key) {
  return JSON.parse(this.getItem(key));
};

const getAllArticles = async (userApiKey, userAccessToken) => {
  const apiArticleUrl = "https://fullstack.exercise.applifting.cz/articles";
  const options = {
    method: "GET",
    headers: {
      "X-API-KEY": userApiKey,
      Authorization: userAccessToken,
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

const addNewArticle = async (userApiKey, userAccessToken, articleData) => {
  const apiArticleUrl = "https://fullstack.exercise.applifting.cz/articles";
  const options = {
    method: "POST",
    headers: {
      "X-API-KEY": userApiKey,
      Authorization: userAccessToken,
      "Content-type": "application/json",
    },
  };
  try {
    const { data } = await axios.post(apiArticleUrl, articleData, options);
    localStorage.setItem(data.articleId, data);
  } catch (error) {
    console.log(`Error fetching data - ${error.message}`);
  }
};

export { getAllArticles, addNewArticle };
