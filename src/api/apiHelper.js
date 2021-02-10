const registerUser = async (userName, userPassword) => {
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

  const processedData = response.json();
  return Promise.resolve(processedData);
};

const loginUser = async (userName, userPassword, apiKey) => {
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

  const processedData = response.json();
  return Promise.resolve(processedData);
};

module.exports = {
  registerUser,
  loginUser,
};
