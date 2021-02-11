import axios from "axios";

const registerUser = async (username, password) => {
  const apiRegisterUrl = `https://fullstack.exercise.applifting.cz/tenants`;
  const userCredentials = {
    Name: username,
    Password: password,
  };
  const requestOptions = {
    method: `POST`,
    headers: {
      "Content-type": "application/json",
    },
  };
  try {
    const response = await axios.post(
      apiRegisterUrl,
      userCredentials,
      requestOptions
    );

    if (response.status > 204) {
      throw new Error(`Error ${response.statusText}`);
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (username, password, apiKey) => {
  const apiRegisterUrl = `https://fullstack.exercise.applifting.cz/login`;
  const userCredentials = {
    Username: username,
    Password: password,
  };
  const requestOptions = {
    method: `POST`,
    headers: {
      "X-API-KEY": apiKey,
      "Content-type": "application/json",
    },
  };
  try {
    const response = await axios.post(
      apiRegisterUrl,
      userCredentials,
      requestOptions
    );

    if (response.status > 204) {
      throw new Error(`Error ${response.statusText}`);
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { registerUser, loginUser };
