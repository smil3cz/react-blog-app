import { Redirect, Route } from "react-router-dom";

const ProtectedRouteArticles = ({
  component: Component,
  userLogged,
  userLogin,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return userLogged ? (
          <Component {...props} userLogin={userLogin} />
        ) : (
          <Redirect to={{ pathname: "/user" }} />
        );
      }}
    />
  );
};

export default ProtectedRouteArticles;
