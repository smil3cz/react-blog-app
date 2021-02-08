import { Fragment } from "react";
import avatar from "./images/avatar.png";

const HeaderAccount = () => {
  return (
    <Fragment>
      <div className="header__account-menu">
        <a href="#" className="header__account-link">
          My Articles
        </a>
        <a href="#" className="header__account-link">
          Create Articles
        </a>
      </div>
      <div className="header__account-avatar">
        <img src={avatar} alt="User Avatar" />
      </div>
    </Fragment>
  );
};

export default HeaderAccount;
