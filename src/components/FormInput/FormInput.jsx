import { useState } from "react";
import "./styles.scss";

const FormInput = (props) => {
  const [id] = useState(props.id);
  const [type] = useState(props.type);
  const [size] = useState(props.size);

  return (
    <input
      id={id}
      type={type}
      className={`form-input form-input--${size}`}
      required
    ></input>
  );
};

export default FormInput;
