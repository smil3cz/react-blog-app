const UserForm = () => {
  return (
    <div className="form">
      <div className="form__type">
        <div className="form__type-login">
          <a href="#">Login</a>
        </div>
        <div className="form__type-register">
          <a href="#">Register</a>
        </div>
      </div>
      <form className="form__login">
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          className="form__login-username"
          placeholder="username"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className="form__login-password"
          placeholder="password"
          type="password"
          required
        />
        <button type="submit">Log In</button>
      </form>
      <form className="form__register">
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          className="form__login-username"
          placeholder="username"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className="form__login-password"
          placeholder="password"
          type="password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserForm;
