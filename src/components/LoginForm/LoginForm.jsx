import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const LoginForm = ({ handleUserLogin, userLogged }) => {
  const userLogin = (event) => {
    event.preventDefault();
    let user = {
      userName: event.target[0].value,
      userPassword: event.target[1].value,
    };
    handleUserLogin(user);
  };

  const history = useHistory();
  useEffect(() => {
    if (userLogged) {
      history.push({ pathname: "/" });
    }
  });

  return (
    <form onSubmit={(event) => userLogin(event)} className="form__container">
      <h3 className="form__heading">Log In</h3>
      <label htmlFor="userId">Username</label>
      <input className="username" id="userId" type="text" required />
      <label htmlFor="passId">Password</label>
      <input className="password" id="passId" type="password" required />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
