import React, { Fragment } from "react";
import "./App.scss";
import Header from "./Header/Header";
import HeaderAccount from "./HeaderAccount/HeaderAccount";
import Footer from "./Footer/Footer";
import LoginForm from "./LoginForm/LoginForm";
import "./Header/styles.scss";
import "./HeaderAccount/styles.scss";
import "./Footer/styles.scss";
import "./LoginForm/styles.scss";

class App extends React.Component {
  state = {
    user: {
      isLogged: false,
      userName: "",
      userPassword: "",
      userApi: "",
      tenantId: "",
      createdAt: "",
      lastUsedAt: null,
      accessToken: "",
    },
  };

  render() {
    return (
      <Fragment>
        <Header headerAccount={<HeaderAccount />} />
        <main className="main">
          <LoginForm />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
