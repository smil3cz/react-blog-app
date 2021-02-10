import React, { Fragment } from "react";
import "./App.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import UserForm from "./UserForm/UserForm";
import { registerUser, loginUser } from "../api/apiHelper";
import "./Header/styles.scss";
import "./HeaderAccount/styles.scss";
import "./Footer/styles.scss";
import "./UserForm/styles.scss";
import "./HeaderLogo/styles.scss";
import "./LoginForm/styles.scss";
import "./RegisterForm/styles.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userRegistration: null,
      userLogin: null,
      userLogged: false,
      isFormOpen: false,
    };
  }

  handleUserRegistration = async ({ userName, userPassword }) => {
    const respond = await registerUser(userName, userPassword);
    this.setState({
      userRegistration: respond,
    });
  };

  handleUserLogin = async ({ userName, userPassword }) => {
    const respond = await loginUser(
      userName,
      userPassword,
      !this.state.userRegistration.apiKey
        ? this.state.userLogin.apiKey
        : this.state.userRegistration.apiKey
    );
    const userLoginData = {
      userName,
      userPassword,
      accessToken: respond.access_token,
      expiresIn: respond.expires_in,
      tokenType: respond.token_type,
      tenantId: this.state.userRegistration.tenantId,
      apiKey: this.state.userRegistration.apiKey,
      createdAt: this.state.userRegistration.createdAt,
      lastUsed: this.state.userRegistration.lastUsed,
    };
    this.setState({
      userLogin: userLoginData,
      userRegistration: null,
      userLogged: true,
      isFormOpen: false,
    });
  };

  displayForm = () => {
    this.setState({ isFormOpen: true });
  };

  render() {
    return (
      <Fragment>
        <Header
          userData={this.state.userLogged}
          displayForm={this.displayForm}
        />
        <main className="main">
          <UserForm
            isFormOpen={this.state.isFormOpen}
            handleUserRegistration={this.handleUserRegistration}
            handleUserLogin={this.handleUserLogin}
          />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
