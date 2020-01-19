import React from "react";

const Button = ({ title, onClick, type, disabled }) => {
  const cls = `btn btn-${type}`;
  return (
    <button onClick={onClick} className={cls} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
