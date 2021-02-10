const HomePage = ({ userLogged }) => {
  return (
    <section className="homepage__section">
      <h1>Blog App</h1>
      {userLogged ? (
        <p>Welcome to Blog App!</p>
      ) : (
        <p>Welcome to Blog App! Pls register to use our app.</p>
      )}
    </section>
  );
};

export default HomePage;
