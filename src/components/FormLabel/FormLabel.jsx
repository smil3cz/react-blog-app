import { useState } from "react";

const FormLabel = (props) => {
  const [idFor] = useState(props.id);
  return (
    <label className=".form-label" htmlFor={idFor}>
      {props.children}
    </label>
  );
};

export default FormLabel;
