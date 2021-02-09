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
  return processedData;
};

export default registerUser;
