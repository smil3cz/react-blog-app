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
    const { data } = await axios.post(
      apiRegisterUrl,
      userCredentials,
      requestOptions
    );
    localStorage.setItem("apiKey", data.apiKey);
    localStorage.setItem("userLogin", JSON.stringify(data));
    return data;
  } catch (error) {
    console.dir(`Error during registration - ${error.message}`);
  }
};

const loginUser = async (username, password) => {
  const apiRegisterUrl = `https://fullstack.exercise.applifting.cz/login`;
  const apiKey = localStorage.getItem("apiKey");
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
    const { data } = await axios.post(
      apiRegisterUrl,
      userCredentials,
      requestOptions
    );
    localStorage.setItem("accessToken", JSON.stringify(data));
    return data;
  } catch (error) {
    console.log(`Error during login - ${error.message}`);
  }
};

export { registerUser, loginUser };
