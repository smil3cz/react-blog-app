import HeaderAccount from "../HeaderAccount/HeaderAccount";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import { Link } from "react-router-dom";

const Header = ({ userData, displayForm }) => {
  const handleForm = () => {
    displayForm();
  };
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__menu">
          <ul className="header__links">
            <Link className="header__link-item" to="/">
              <li>
                <HeaderLogo />
              </li>
            </Link>
            <Link className="header__link-item header__link">
              <li>Recent Articles</li>
            </Link>
            <Link className="header__link-item header__link" to="/about">
              <li>About</li>
            </Link>
          </ul>
        </div>
        <div className="header__account">
          {!userData ? (
            <a href="#" className="header__login" onClick={() => handleForm()}>
              Log in/Register<span>&rarr;</span>
            </a>
          ) : (
            <HeaderAccount />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
