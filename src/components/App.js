import React, { Fragment } from "react";
import "./App.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import UserForm from "./UserForm/UserForm";
import registerUser from "../api/apiHelper";
import "./Header/styles.scss";
import "./HeaderAccount/styles.scss";
import "./Footer/styles.scss";
import "./UserForm/styles.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      isFormOpen: false,
    };
  }

  displayForm = () => {
    this.setState({ isFormOpen: true });
  };

  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <Header userData={this.state.user} displayForm={this.displayForm} />
        <main className="main">
          <UserForm isOpen={this.state.isFormOpen} />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
