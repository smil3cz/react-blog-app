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
      <input className="username" id="userId" type="text" required />
      <label htmlFor="passId">Password</label>
      <input className="password" id="passId" type="password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
