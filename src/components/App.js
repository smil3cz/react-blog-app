import React, { Fragment } from "react";
import "./App.scss";
import Header from "./Header/Header";
import "./Header/styles.scss";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
      </Fragment>
    );
  }
}

export default App;
