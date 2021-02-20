import FormButton from "../FormComponents/FormButton/FormButton";
import { Link } from "react-router-dom";

const UserOffline = () => {
  return (
    <div className="article-detail__offline">
      <h4>To add comments you have to be logged!</h4>
      <Link to="/user">
        <FormButton color="primary">Log In/Register</FormButton>
      </Link>
    </div>
  );
};

export default UserOffline;
