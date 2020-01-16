import React from "react";
import PropTypes from "prop-types";

import "./checkBox.scss";
const CheckBox = ({ checked, onChange, caption }) => {
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
      <label className="checkbox-label" htmlFor={id}>
        {caption}
      </label>
    </div>
  );
};

CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  caption: PropTypes.string
};

export default CheckBox;
