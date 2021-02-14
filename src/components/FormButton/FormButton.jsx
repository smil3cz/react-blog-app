import { useState } from "react";
import "./styles.scss";

const FormButton = (props) => {
  const [color] = useState(props.color);
  const [type] = useState(props.type);
  const [position] = useState(props.position);

  return (
    <button
      className={`button button--${color} button--${position}`}
      type={type}
    >
      {props.children}
    </button>
  );
};

export default FormButton;
