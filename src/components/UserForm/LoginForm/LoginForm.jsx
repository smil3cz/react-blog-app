import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import FormButton from "../../FormComponents/FormButton/FormButton";
import FormInput from "../../FormComponents/FormInput/FormInput";
import FormLabel from "../../FormComponents/FormLabel/FormLabel";
import "./styles.scss";

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
      <FormLabel id="userId">Username</FormLabel>
      <FormInput id="userId" type="text" size="normal" />
      <FormLabel id="passId">Password</FormLabel>
      <FormInput id="passId" type="password" size="normal" />
      <FormButton color="primary" type="submit" position="end">
        Log In
      </FormButton>
    </form>
  );
};

export default LoginForm;
