import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  userLogged,
  userLogin,
  ...other
}) => {
  return (
    <Route
      {...other}
      render={(props) =>
        userLogged ? (
          <Component {...props} userLogin={userLogin} />
        ) : (
          <Redirect to={{ pathname: "/user" }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
