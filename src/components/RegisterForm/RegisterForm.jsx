import FormButton from "../FormButton/FormButton";
import FormInput from "../FormInput/FormInput";

const RegisterForm = ({ handleUserRegistration }) => {
  const userRegistration = (event) => {
    event.preventDefault();
    let user = {
      userName: event.target[0].value,
      userPassword: event.target[1].value,
    };
    handleUserRegistration(user);
    event.target[0].value = "";
    event.target[1].value = "";
  };

  return (
    <form
      onSubmit={(event) => userRegistration(event)}
      className="form__container"
    >
      <h3 className="form__heading">Register</h3>
      <label htmlFor="userId">Username</label>
      <FormInput id="userId" size="normal" type="text" />
      <label htmlFor="passId">Password</label>
      <FormInput id="passId" size="normal" type="password" />
      <FormButton color="primary" type="submit">
        Register
      </FormButton>
    </form>
  );
};

export default RegisterForm;
