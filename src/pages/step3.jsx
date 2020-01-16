import React from "react";
import PropTypes from "prop-types";
import Button from "../components/button";
import BreadCrumb from "../components/breadCrumb";
import Card from "../components/card";
import executors from "./../data/data";
import photo from "../images/image.jpg";
import CheckBox from "../components/checkBox/checkBox";

const Step3 = ({
  step,
  nextStep,
  handleCheckBoxChange,
  values,
  handleExecutorIdChange
}) => {
  const cardList = executors.map(ex => {
    return (
      <Card
        title={ex.title}
        exId={ex.id}
        specialisation={ex.specialization}
        rating={ex.rating}
        photo={photo}
        key={ex.id}
        handleExecutorIdChange={handleExecutorIdChange}
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
      <span className="showAll">посмотреть всех</span>
      <div className="insurance">
        <CheckBox
          checked={values.insuranceCheckBox}
          onChange={handleCheckBoxChange("insuranceCheckBox")}
          caption={"Застраховать заказ за 2000 рублей"}
        />
      </div>
      <div className="rules">
        <CheckBox
          checked={values.rulesCheckBox}
          onChange={handleCheckBoxChange("rulesCheckBox")}
          caption={`Нажимая кнопку "Принять заказ", вы принимаете Правила использования сервиса`}
        />
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
