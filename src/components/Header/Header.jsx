import HeaderAccount from "../HeaderAccount/HeaderAccount";

const Header = ({ userData, displayForm }) => {
  const handleForm = (event) => {
    event.preventDefault();
    displayForm();
  };
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__menu">
          <ul className="header__links">
            <li className="header__link-item">
              <a href="#" className="header__link">
                Home
              </a>
            </li>
            <li className="header__link-item">
              <a href="#" className="header__link">
                Recent Articles
              </a>
            </li>
            <li className="header__link-item">
              <a href="#" className="header__link">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="header__account">
          {!userData.isLogged ? (
            <a
              href="#"
              className="header__login"
              onClick={(event) => handleForm(event)}
            >
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
