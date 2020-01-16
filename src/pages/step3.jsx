import React from "react";
import PropTypes from "prop-types";
import Button from "../components/button";
import BreadCrumb from "../components/breadCrumb";
import Card from "../components/card";
import executors from "./../data/data";
import photo from "../images/image.jpg";

const Step3 = ({ step, nextStep, handleChange, values }) => {
  const cardList = executors.map(ex => {
    return (
      <Card
        title={ex.title}
        exId={ex.id}
        specialisation={ex.specialization}
        rating={ex.rating}
        photo={photo}
        key={ex.id}
        handleChange={handleChange}
        selected={values.executorId === ex.id}
      />
    );
  });

  return (
    <>
      <BreadCrumb step={step} />
      <h2>Выбор Мастера</h2>
      <div className="executors">
        <div className="recommendations">
          <h4>Наши рекомендации</h4>
          {cardList}
        </div>
        <div className="last-five">
          <h4>Последние пять</h4>
          {cardList}
        </div>
      </div>

      <div className="buttons">
        <Button title="Вернуться" type="secondary" />
        <Button onClick={nextStep} title="Продолжить" type="primary" />
      </div>
    </>
  );
};

Step3.propTypes = {
  step: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired
};

export default Step3;
