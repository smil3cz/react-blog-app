const LoginForm = () => {
  return (
    <form className="login">
      <h3>Log In</h3>
      <label htmlFor="userName">User Name</label>
      <input
        id="userName"
        className="login__user-name"
        name="userName"
        placeholder="username"
        required
      ></input>
      <label htmlFor="userPassword">User Name</label>
      <input
        id="userPassword"
        className="login__user-password"
        name="userPassword"
        placeholder="password"
        type="password"
        required
      ></input>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
