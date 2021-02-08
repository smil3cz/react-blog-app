import React, { Fragment } from "react";
import "./App.scss";
import Header from "./Header/Header";
import HeaderAccount from "./HeaderAccount/HeaderAccount";
import "./Header/styles.scss";
import "./HeaderAccount/styles.scss";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header headerAccount={<HeaderAccount />} />
      </Fragment>
    );
  }
}

export default App;
