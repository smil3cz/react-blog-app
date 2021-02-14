import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import UserForm from "./UserForm/UserForm";
import AboutPage from "./AboutPage/AboutPage";
import HomePage from "./HomePage/HomePage";
import AddArticleItem from "./AddArticleItem/AddArticleItem";
import AdminMyArticles from "./AdminMyArticles/AdminMyArticles";
import DisplayArticles from "./DisplayArticles/DisplayArticles";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { registerUser, loginUser } from "../api/apiUserHelper.js";
import "./styles.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userRegistration: {},
      userLogin: {},
      incorrectCredentials: false,
      userLogged: false,
    };
  }

  handleUserRegistration = async ({ userName, userPassword }) => {
    const respond = await registerUser(userName, userPassword);
    this.setState({
      userRegistration: respond,
    });
  };

  handleUserLogin = async ({ userName, userPassword }) => {
    if (!this.state.userRegistration) {
      return this.setState({ incorrectCredentials: true });
    }
    const respond = await loginUser(
      userName,
      userPassword,
      !this.state.userRegistration.apiKey
        ? this.state.userLogin.apiKey
        : this.state.userRegistration.apiKey
    );
    if (!respond) {
      return this.setState({ incorrectCredentials: true });
    }
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
      incorrectCredentials: false,
      userLogged: true,
    });
  };

  render() {
    return (
      <Router>
        <Fragment>
          <Header userData={this.state.userLogged} />
          <main className="main">
            <Switch>
              <Route path="/" exact>
                <HomePage
                  userLogged={this.state.userLogged}
                  userName={this.state.userLogin.userName}
                />
              </Route>
              <ProtectedRoute
                path="/articles"
                component={DisplayArticles}
                userLogged={this.state.userLogged}
                userLogin={this.state.userLogin}
              />
              <ProtectedRoute
                path="/my-articles"
                userLogged={this.state.userLogged}
                component={AdminMyArticles}
                userLogin={this.state.userLogin}
              />
              <ProtectedRoute
                path="/create-article"
                component={AddArticleItem}
                userLogged={this.state.userLogged}
                userLogin={this.state.userLogin}
              />
              <Route path="/about" component={AboutPage} />
              <Route path="/user">
                <UserForm
                  userLogged={this.state.userLogged}
                  incorrectCredentials={this.state.incorrectCredentials}
                  handleUserRegistration={this.handleUserRegistration}
                  handleUserLogin={this.handleUserLogin}
                />
              </Route>
            </Switch>
          </main>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
