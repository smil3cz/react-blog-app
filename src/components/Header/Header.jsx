const Header = ({ headerAccount }) => {
  let userIsLogged = false;
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
                Recent articles
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
          {!userIsLogged ? (
            <a href="#" className="header__login">
              Log in<span>&rarr;</span>
            </a>
          ) : (
            headerAccount
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
