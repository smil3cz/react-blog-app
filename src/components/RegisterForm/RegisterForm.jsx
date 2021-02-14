import FormButton from "../FormButton/FormButton";
import FormInput from "../FormInput/FormInput";
import FormLabel from "../FormLabel/FormLabel";

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
      <FormLabel id="userId">Username</FormLabel>
      <FormInput id="userId" size="normal" type="text" />
      <FormLabel id="passId">Password</FormLabel>
      <FormInput id="passId" size="normal" type="password" />
      <FormButton color="primary" type="submit" position="end">
        Register
      </FormButton>
    </form>
  );
};

export default RegisterForm;
