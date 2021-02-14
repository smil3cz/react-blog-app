import { useState } from "react";
import "./styles.scss";

const FormLabel = (props) => {
  const [idFor] = useState(props.id);
  return (
    <label className="form-label" htmlFor={idFor}>
      {props.children}
    </label>
  );
};

export default FormLabel;
