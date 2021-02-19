import { Fragment } from "react";
import FormButton from "../FormComponents/FormButton/FormButton";

const UserOffline = () => {
  return (
    <div className="article-detail__offline">
      <h4>To add comments you have to be logged!</h4>
      <FormButton color="primary">Log In/Register</FormButton>
    </div>
  );
};

export default UserOffline;
