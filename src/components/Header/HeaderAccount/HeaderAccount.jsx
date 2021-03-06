import { Fragment } from "react";
import avatar from "./images/default_avatar.png";
import { Link } from "react-router-dom";
import AvatarItem from "../../AvatarItem/AvatarItem";
import "./styles.scss";

const HeaderAccount = () => {
  return (
    <Fragment>
      <ul className="header__account-menu">
        <Link to="/my-articles" className="header__account-link">
          <li>My Articles</li>
        </Link>
        <Link to="/create-article" className="header__account-link">
          <li>Create Articles</li>
        </Link>
      </ul>
      <AvatarItem style="header__account-avatar" />
    </Fragment>
  );
};

export default HeaderAccount;
