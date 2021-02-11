import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: "login",
      formWarning: false,
    };
  }

  changeFormType = (e) => {
    const value = e.currentTarget.textContent;
    const parentElement = e.target.parentNode;
    const secondElement = parentElement.nextElementSibling
      ? parentElement.nextElementSibling
      : parentElement.previousElementSibling;
    const active = "form__active";

    if (!parentElement.classList.contains(active)) {
      parentElement.classList.add(active);
      secondElement.classList.remove(active);
    }

    this.setState({ formType: value.toLowerCase() });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.incorrectCredentials !== this.props.incorrectCredentials) {
      this.setState({ formWarning: this.props.incorrectCredentials });
    }
  }

  render() {
    return (
      <div className="form">
        <div className="form__type">
          <div className="form__login-link form__active">
            <a onClick={(e) => this.changeFormType(e)}>Login</a>
          </div>
          <div className="form__register-link">
            <a onClick={(e) => this.changeFormType(e)}>Register</a>
          </div>
        </div>
        {this.state.formType === "login" ? (
          <LoginForm handleUserLogin={this.props.handleUserLogin} />
        ) : (
          <RegisterForm
            handleUserRegistration={this.props.handleUserRegistration}
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
