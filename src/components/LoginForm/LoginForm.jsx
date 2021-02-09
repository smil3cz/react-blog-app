const LoginForm = () => {
  return (
    <form className="form__container">
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
