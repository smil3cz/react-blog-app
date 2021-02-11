import { Redirect, Route } from "react-router-dom";

const ProtectedRouteArticles = ({
  component: Component,
  userLogged,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        userLogged ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/user" }} />
        )
      }
    />
  );
};

export default ProtectedRouteArticles;
