import React from "react";
import Button from "../components/button";
import BreadCrumb from "../components/breadCrumb";
import PropTypes from "prop-types";

const Step4 = ({ step, nextStep, prevStep, values }) => {
  return (
    <>
      <BreadCrumb step={step} />
      <h2>Уведомить ревизора о необходимости доставки</h2>
      <div className="delivery">
        <p>Выберите вид доставки</p>
        <div className="delivery-radio">
          <div className="delivery-radio-group">
            <input type="radio" id="123" />
            <label htmlFor="123">Курьером по городу 500р.</label>
          </div>
          <div className="delivery-radio-group">
            <input type="radio" id="1234" />
            <label htmlFor="1234">Транспортной компанией</label>
          </div>
          <div className="delivery-radio-group">
            <input type="radio" id="12345" />
            <label htmlFor="12345">Не нужна</label>
          </div>
        </div>
      </div>
      <div className="address">
        <p>Адрес</p>
        <p>{values.addressText}</p>
        <span className="mapLink">Показать на карте</span>
      </div>

      <div className="comment">
        <p>Комментарий к услуге</p>
        <textarea></textarea>
      </div>

      <div className="deal">
        <h2>Ваша сделка</h2>
      </div>

      <Button onClick={prevStep} title="Вернуться" type="secondary" />
      <Button onClick={nextStep} title="Продолжить" type="primary" />
    </>
  );
};

Step4.propTypes = {
  step: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired
};

export default Step4;
