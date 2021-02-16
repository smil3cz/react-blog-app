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
// import "./styles.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogin: {},
      incorrectCredentials: false,
      userLogged: false,
    };
  }

  handleUserRegistration = async ({ userName, userPassword }) => {
    await registerUser(userName, userPassword);
  };

  handleUserLogin = async ({ userName, userPassword }) => {
    const response = await loginUser(userName, userPassword);
    if (!response) {
      return this.setState({ incorrectCredentials: true });
    }
    this.setState({
      userLogin: JSON.parse(localStorage.getItem("userLogin")),
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
                  userName={this.state.userLogin.name}
                />
              </Route>
              <ProtectedRoute
                path="/articles"
                component={DisplayArticles}
                userLogged={this.state.userLogged}
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
