import React from "react";

import "./checkBox.scss";
const CheckBox = ({ checked, onChange }) => {
  const id = Math.random();
  return (
    <div className="checkbox">
      <input
        className="checkbox-input"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label className="checkbox-label" htmlFor={id} />
    </div>
  );
};

export default CheckBox;
