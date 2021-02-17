import HeaderAccount from "./HeaderAccount/HeaderAccount";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import { Link } from "react-router-dom";
import "./styles.scss";
import "./HeaderLogo/styles.scss";

const Header = ({ userData }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__menu">
          <ul className="header__links">
            <Link className="header__logo" to="/">
              <li>
                <HeaderLogo />
              </li>
            </Link>
            <Link className="header__link-item header__link" to="/articles">
              <li>Recent Articles</li>
            </Link>
            <Link className="header__link-item header__link" to="/about">
              <li>About</li>
            </Link>
          </ul>
        </div>
        <div className="header__account">
          {!userData ? (
            <Link className="header__login" to="/user">
              <p>
                Log in/Register<span>&rarr;</span>
              </p>
            </Link>
          ) : (
            <HeaderAccount />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
