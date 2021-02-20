import "./styles.scss";

// TODO refactor spinner to central modal
const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="loading-spinner__spinner"></div>
      <h3>Loading page</h3>
    </div>
  );
};

export default LoadingSpinner;
