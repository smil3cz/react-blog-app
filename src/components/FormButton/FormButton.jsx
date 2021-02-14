import { useState } from "react";
import "./styles.scss";

const FormButton = (props) => {
  const [color] = useState(props.color);
  const [type] = useState(props.type);

  return (
    <button className={`button button--${color}`} type={type}>
      {props.children}
    </button>
  );
};

export default FormButton;
