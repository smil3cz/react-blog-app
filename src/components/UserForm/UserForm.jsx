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
        <label htmlFor="username--login">User Name</label>
        <input
          id="username--login"
          className="form__login-username"
          placeholder="username"
          required
        />
        <label htmlFor="password--login">Password</label>
        <input
          id="password--login"
          className="form__login-password"
          placeholder="password"
          type="password"
          required
        />
        <button type="submit">Log In</button>
      </form>
      <form className="form__register">
        <label htmlFor="username__register">User Name</label>
        <input
          id="username--register"
          className="form__username--register"
          placeholder="username"
          required
        />
        <label htmlFor="password--register">Password</label>
        <input
          id="password--register"
          className="form__password--register"
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
