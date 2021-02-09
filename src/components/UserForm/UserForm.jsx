const UserForm = ({ isOpen }) => {
  let typeOfForm = "login";
  if (isOpen) {
    document.querySelector(".form").classList.add("form--open");
  }
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
      <form className="form__container">
        <h3 className="form__heading">
          {typeOfForm === "login" ? "Log In" : "Register"}
        </h3>
        <label htmlFor="userId">Username</label>
        <input className="username" id="userId" type="text" required />
        <label htmlFor="passId">Password</label>
        <input className="password" id="passId" type="password" required />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default UserForm;
