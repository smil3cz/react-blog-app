import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formType: "login", formActive: this.props.isFormOpen };
  }

  changeFormType = () => {
    const loginType = document.querySelector(".form__login-link");
    const registerType = document.querySelector(".form__register-link");

    loginType.addEventListener("click", () => {
      loginType.parentElement.classList.add("form__active");
      registerType.parentElement.classList.remove("form__active");
      this.setState({ formType: "login" });
    });

    registerType.addEventListener("click", () => {
      loginType.parentElement.classList.remove("form__active");
      registerType.parentElement.classList.add("form__active");
      this.setState({ formType: "register" });
    });
  };

  displayFormModal = () => {
    document.querySelector(".form").classList.add("form--open");
  };

  componentDidUpdate(prevProps) {
    if (prevProps.isFormOpen !== this.props.isFormOpen) {
      this.setState({ formActive: this.props.isFormOpen });
      this.displayFormModal();
    }
  }

  render() {
    return (
      <div className="form">
        <div className="form__type">
          <div className="form__login-link form__active">
            <a onClick={this.changeFormType}>Login</a>
          </div>
          <div className="form__register-link">
            <a onClick={this.changeFormType}>Register</a>
          </div>
        </div>
        {this.state.formType === "login" ? <LoginForm /> : <RegisterForm />}
      </div>
    );
  }
}

export default UserForm;