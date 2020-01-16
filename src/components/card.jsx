import React from "react";
import CheckBox from "./checkBox/checkBox";

const Card = ({
  exId,
  photo,
  title,
  specialisation,
  rating,
  handleExecutorIdChange,
  selected
}) => {
  const onChange = val => {
    if (val) {
      val = 0;
    } else {
      val = exId;
    }
    handleExecutorIdChange(val);
  };

  return (
    <div className="card">
      <img className="card-photo" src={photo} alt="Костик" />
      <div className="card-info">
        <div className="card-info-title">{title}</div>
        <div className="card-info-details">специализация {specialisation}</div>
        <div className="card-info-details">рейтинг {rating}</div>
      </div>
      <CheckBox checked={selected} onChange={() => onChange(selected)} />
    </div>
  );
};

export default Card;
