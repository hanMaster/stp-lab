import React from "react";

const Button = ({ title, onClick, type }) => {
  const cls = `btn btn-${type}`;
  return (
    <button onClick={onClick} className={cls}>
      {title}
    </button>
  );
};

export default Button;
