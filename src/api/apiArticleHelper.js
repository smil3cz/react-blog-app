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
    const { data } = await axios.post(apiArticleUrl, articleData, options);
    return data;
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
  }
};

const addNewComment = async (commentData) => {
  const apiArticleUrl = `https://fullstack.exercise.applifting.cz/comments`;
  const options = {
    method: "POST",
    headers: {
      "X-API-KEY": localStorage.getItem("apiKey"),
      "Content-type": "application/json",
    },
  };

  try {
    const { data } = await axios.post(apiArticleUrl, commentData, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const addVote = async (commentId) => {
  const apiCommentsUpUrl = `https://fullstack.exercise.applifting.cz/comments/${commentId}/vote/up`;
  const options = {
    method: "POST",
    headers: {
      "X-API-KEY": localStorage.getItem("apiKey"),
      "Content-type": "application/json",
    },
  };

  try {
    const { data } = await axios.post(apiCommentsUpUrl, {}, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const substractVote = async (commentId) => {
  const apiCommentsUpUrl = `https://fullstack.exercise.applifting.cz/comments/${commentId}/vote/down`;
  const options = {
    method: "POST",
    headers: {
      "X-API-KEY": localStorage.getItem("apiKey"),
      "Content-type": "application/json",
    },
  };

  try {
    const { data } = await axios.post(apiCommentsUpUrl, {}, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const uploadImage = async (image) => {
  const apiImageUrl = `https://fullstack.exercise.applifting.cz/images`;
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const options = {
    method: "POST",
    headers: {
      "X-API-KEY": localStorage.getItem("apiKey"),
      "Content-type": "multipart/form-data",
      Authorization: accessToken.access_token,
    },
  };
  try {
    const { data } = await axios.post(apiImageUrl, image, options);
    console.log("IMAGE UPLOAD API", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const downloadImage = async (imageId) => {
  const apiImageUrl = `https://fullstack.exercise.applifting.cz/images/${imageId}`;
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const options = {
    method: "GET",
    headers: {
      "X-API-KEY": localStorage.getItem("apiKey"),
      Authorization: accessToken.access_token,
    },
    responseType: "blob",
  };
  try {
    const { data } = await axios.get(apiImageUrl, options);
    const url = URL.createObjectURL(data);
    return url;
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllArticles,
  saveNewArticle,
  getArticleDetail,
  addVote,
  substractVote,
  addNewComment,
  uploadImage,
  downloadImage,
};
