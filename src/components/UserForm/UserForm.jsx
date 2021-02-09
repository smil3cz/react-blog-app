let typeOfForm = "login";

const changeFormType = () => {
  const links = document.querySelectorAll(".form__type a");
  links.forEach((link) =>
    link.addEventListener("click", () => {
      if (link.textContent.toLocaleLowerCase() === "login") {
        typeOfForm = "login";
        link.parentElement.classList.toggle("form__active");
      } else if (link.textContent.toLocaleLowerCase() === "register") {
        typeOfForm = "register";
        link.parentElement.classList.toggle("form__active");
      }
    })
  );
};

const UserForm = ({ isOpen }) => {
  const LOGIN = "Log In";
  const REGISTER = "Register";

  if (isOpen) {
    document.querySelector(".form").classList.add("form--open");
  }
  changeFormType();
  return (
    <div className="form">
      <div className="form__type">
        <div className="form__active">
          <a href="#">Login</a>
        </div>
        <div>
          <a href="#">Register</a>
        </div>
      </div>
      <form className="form__container">
        <h3 className="form__heading">
          {typeOfForm === "login" ? LOGIN : REGISTER}
        </h3>
        <label htmlFor="userId">Username</label>
        <input className="username" id="userId" type="text" required />
        <label htmlFor="passId">Password</label>
        <input className="password" id="passId" type="password" required />
        <button type="submit">
          {typeOfForm === "login" ? LOGIN : REGISTER}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
