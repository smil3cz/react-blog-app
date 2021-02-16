import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import UserForm from "./UserForm/UserForm";
import AboutPage from "./AboutPage/AboutPage";
import HomePage from "./HomePage/HomePage";
import AddArticleItem from "./AddArticleItem/AddArticleItem";
import AdminMyArticles from "./AdminMyArticles/AdminMyArticles";
import DisplayArticlesList from "./DisplayArticlesList/DisplayArticlesList";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { registerUser, loginUser } from "../api/apiUserHelper.js";
import ArticleItem from "./ArticleItem/ArticleItem";

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
    const response = await registerUser(userName, userPassword);
    this.setState({ userLogin: response });
  };

  handleUserLogin = async ({ userName, userPassword }) => {
    const response = await loginUser(userName, userPassword);
    if (!localStorage.getItem("accessToken") || !response) {
      return this.setState({ incorrectCredentials: true });
    }
    this.setState({
      userLogin: {
        ...JSON.parse(localStorage.getItem("userRegistration")),
        ...JSON.parse(localStorage.getItem("accessToken")),
      },
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
                exact
                component={DisplayArticlesList}
                userLogged={this.state.userLogged}
                userLogin={this.state.userLogin}
              />
              <ProtectedRoute
                path="/articles/:articleId"
                component={ArticleItem}
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
