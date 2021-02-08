import React, { Fragment } from "react";
import "./App.scss";
import Header from "./Header/Header";
import HeaderAccount from "./HeaderAccount/HeaderAccount";
import Footer from "./Footer/Footer";
import "./Header/styles.scss";
import "./HeaderAccount/styles.scss";
import "./Footer/styles.scss";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header headerAccount={<HeaderAccount />} />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
