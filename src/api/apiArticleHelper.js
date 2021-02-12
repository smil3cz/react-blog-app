import axios from "axios";

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

export { getAllArticles };