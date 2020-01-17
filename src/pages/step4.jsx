import React from "react";
import Button from "../components/button";
import BreadCrumb from "../components/breadCrumb";
import PropTypes from "prop-types";
import CheckBox from "../components/checkBox/checkBox";

const Step4 = ({ step, nextStep, prevStep, values, handleCheckBoxChange }) => {
  return (
    <>
      <BreadCrumb step={step} />
      <h2>Уведомить ревизора о необходимости доставки</h2>
      <div className="delivery">
        <p>Выберите вид доставки</p>
        <div className="radio">
          <div className="radio-group">
            <input type="radio" id="123" />
            <label htmlFor="123">Курьером по городу 500р.</label>
          </div>
          <div className="radio-group">
            <input type="radio" id="1234" />
            <label htmlFor="1234">Транспортной компанией</label>
          </div>
          <div className="radio-group">
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
        <div className="amount">
          <label htmlFor="amount_id" className="amount-label">
            Стоимость сделки *
          </label>
          <input type="text" id="amount_id" className="amount-input" />
          <p className="comission">В том числе комиссия: 1500р.</p>
          <p>Кто платит комиссию?</p>
          <div className="radio">
            <div className="radio-group">
              <input type="radio" id="223" />
              <label htmlFor="223">Продавец</label>
            </div>
            <div className="radio-group">
              <input type="radio" id="2234" />
              <label htmlFor="2234">Покупатель</label>
            </div>
            <div className="radio-group">
              <input type="radio" id="22345" />
              <label htmlFor="22345">50% Продавец. 50% Покупатель</label>
            </div>
          </div>
          <p>Стоимость услуг Мастера: 500р.</p>
          <p>Дополнительные условия сделки: 350р.</p>
          <p>Доставка курьером по городу: 500р.</p>
          <span className="amount-total">итого: 13550р.</span>
        </div>
      </div>

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
        <Button onClick={prevStep} title="Вернуться" type="secondary" />
        <Button onClick={nextStep} title="Продолжить" type="primary" />
      </div>
    </>
  );
};

Step4.propTypes = {
  step: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired
};

export default Step4;
