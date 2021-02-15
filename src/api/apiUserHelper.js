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

    return data;
  } catch (error) {
    console.dir(`Error during registration - ${error.message}`);
  }
};

const loginUser = async (username, password, apiKey) => {
  const savedUser = JSON.parse(localStorage.getItem("userLogin"));
  const apiRegisterUrl = `https://fullstack.exercise.applifting.cz/login`;
  const userCredentials = {
    Username: savedUser.userName || username,
    Password: savedUser.userPassword || password,
  };

  if (savedUser.userName === username && savedUser.userPassword === password) {
    const requestOptions = {
      method: `POST`,
      headers: {
        "X-API-KEY": savedUser.apiKey || apiKey,
        "Content-type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        apiRegisterUrl,
        userCredentials,
        requestOptions
      );

      return data;
    } catch (error) {
      console.log(`Error during login - ${error.message}`);
    }
  } else {
    throw new Error("Wrong username or password!");
  }
};

export { registerUser, loginUser };
