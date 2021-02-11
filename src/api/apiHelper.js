const registerUser = async (userName, userPassword) => {
  try {
    const API_LINK = "https://fullstack.exercise.applifting.cz/tenants";
    const userCredentials = {
      Name: userName,
      Password: userPassword,
    };

    const response = await fetch(API_LINK, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`An error has occured: CODE ${response.statusText}`);
    }

    const processedData = await response.json();
    return processedData;
  } catch (error) {
    console.log(error.message);
  }
};

const loginUser = async (userName, userPassword, apiKey) => {
  try {
    const API_LINK = "https://fullstack.exercise.applifting.cz/login";
    const userCredentials = {
      Username: userName,
      Password: userPassword,
    };

    const response = await fetch(API_LINK, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "X-API-KEY": apiKey,
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`An error has occured: CODE ${response.statusText}`);
    }

    const processedData = await response.json();
    return processedData;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
