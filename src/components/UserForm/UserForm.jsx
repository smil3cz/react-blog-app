import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: "login",
      formActive: this.props.isFormOpen,
      formWarning: false,
    };
  }

  changeFormType = () => {
    const loginType = document.querySelector(".form__login-link");
    const registerType = document.querySelector(".form__register-link");

    loginType.addEventListener("click", () => {
      loginType.classList.add("form__active");
      registerType.classList.remove("form__active");
      this.setState({ formType: "login" });
    });

    registerType.addEventListener("click", () => {
      loginType.classList.remove("form__active");
      registerType.classList.add("form__active");
      this.setState({ formType: "register", formWarning: false });
    });
  };

  displayFormModal = () => {
    document.querySelector(".form").classList.toggle("form--open");
  };

  componentDidUpdate(prevProps) {
    if (prevProps.isFormOpen !== this.props.isFormOpen) {
      this.setState({ formActive: this.props.isFormOpen });
      this.displayFormModal();
    }
    if (prevProps.incorrectCredentials !== this.props.incorrectCredentials) {
      this.setState({ formWarning: this.props.incorrectCredentials });
    }
    this.changeFormType();
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
        {this.state.formType === "login" ? (
          <LoginForm handleUserLogin={this.props.handleUserLogin} />
        ) : (
          <RegisterForm
            handleUserRegistration={this.props.handleUserRegistration}
            changeFormType={this.changeFormType}
          />
        )}
        <div className="form__warning">
          {this.state.formWarning && "Wrong username or password!"}
        </div>
      </div>
    );
  }
}

export default UserForm;
