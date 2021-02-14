import "./styles.scss";

const HomePage = ({ userLogged, userName }) => {
  return (
    <section className="homepage">
      <h1>Blog App</h1>
      {userLogged ? (
        <p>
          Hi, <span className="homepage__name">{userName}</span>. Welcome to
          Blog App!
        </p>
      ) : (
        <p>Welcome to Blog App! Pls register to use our app.</p>
      )}
    </section>
  );
};

export default HomePage;
