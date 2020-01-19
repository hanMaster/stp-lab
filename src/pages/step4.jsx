import React, { useState } from "react";
import { RadioGroup } from "@atlaskit/radio";
import { OptionsPropType } from "@atlaskit/radio/types";
// import Textfield from "@atlaskit/textfield";
import Button from "../components/button";
import BreadCrumb from "../components/breadCrumb";
import PropTypes from "prop-types";
import CheckBox from "../components/checkBox/checkBox";
import map from "./../images/map.png";
import downArrow from "./../images/down.svg";
import upArrow from "./../images/up.svg";

const options: OptionsPropType = [
  {
    name: "deliveryType",
    value: "курьер",
    label: "Курьером по городу 500р."
  },
  { name: "deliveryType", value: "тк", label: "Транспортной компанией" },
  { name: "deliveryType", value: "нет", label: "Не нужна" }
];
const comissionOptions: OptionsPropType = [
  {
    name: "comissionPayer",
    value: "seller",
    label: "Продавец"
  },
  { name: "comissionPayer", value: "buyer", label: "Покаупатель" },
  {
    name: "comissionPayer",
    value: "50/50",
    label: "50% Продавец. 50% Покупатель"
  }
];

const Step4 = ({
  step,
  nextStep,
  prevStep,
  values,
  handleChange,
  changeAmount
}) => {
  const [mapVisibility, setMapVisibility] = useState(false);

  const showMap = () => {
    setMapVisibility(!mapVisibility);
  };

  return (
    <>
      <BreadCrumb step={step} />
      <h2>Уведомить ревизора о необходимости доставки</h2>
      <div className="delivery">
        <p>Выберите вид доставки</p>
        <div className="radio">
          <RadioGroup
            options={options}
            defaultValue={values.deliveryType}
            onChange={handleChange("deliveryType")}
          />
        </div>
      </div>
      <div className="address">
        <p>Адрес</p>
        <p>{values.addressText}</p>
        <span className="mapLink" onClick={showMap}>
          {mapVisibility ? "Скрыть карту" : "Показать на карте"}
        </span>
        {mapVisibility && (
          <div className="map">
            <img src={map} alt="карта" />
          </div>
        )}
      </div>

      <div className="comment">
        <p>Комментарий к услуге</p>
        <textarea
          className="comment-area"
          value={values.orderCommentText}
          onChange={handleChange("orderCommentText")}
        />
      </div>

      <div className="deal">
        <h2>Ваша сделка</h2>
        <div className="amount">
          <label className="amount-label">Стоимость сделки, руб. *</label>
          <div className="number-input">
            <input
              type="number"
              step="50"
              id="amount_id"
              className="amount-input"
              value={values.amount}
              onChange={handleChange("amount")}
            />
            <div className="arrows">
              <span
                className="arrow arrow-up"
                onClick={() => changeAmount("up")}
              >
                <img src={upArrow} alt="up" />
              </span>
              <span className="arrow arrow-middle"></span>
              <span
                className="arrow arrow-down"
                onClick={() => changeAmount("down")}
              >
                <img src={downArrow} alt="down" />
              </span>
            </div>
          </div>

          <p className="comission">
            В том числе комиссия: {values.comission} Р.
          </p>
          <p>Кто платит комиссию?</p>
          <div className="radio">
            <RadioGroup
              options={comissionOptions}
              defaultValue={values.comissionPayer}
              onChange={handleChange("comissionPayer")}
            />
          </div>
          <p>Стоимость услуг Мастера: 500 Р.</p>
          <p>Дополнительные условия сделки: 350 Р.</p>

          <p>
            Доставка&nbsp;
            {values.deliveryType === "курьер"
              ? "курьером по городу: 500 Р."
              : values.deliveryType === "тк"
              ? "транспортной компанией: 0 Р."
              : "не нужна: 0 Р."}
          </p>

          <span className="amount-total">итого: {values.amountTotal} Р.</span>
        </div>
      </div>

      <div className="insurance">
        <CheckBox
          checked={values.insuranceCheckBox}
          onChange={handleChange("insuranceCheckBox")}
          caption={"Застраховать заказ за 2000 рублей"}
        />
      </div>
      <div className="rules">
        <CheckBox
          checked={values.rulesCheckBox}
          onChange={handleChange("rulesCheckBox")}
          caption={`Нажимая кнопку "Принять заказ", вы принимаете Правила использования сервиса`}
        />
      </div>

      <div className="buttons">
        <Button onClick={prevStep} title="Вернуться" type="secondary" />
        <Button
          onClick={nextStep}
          title="Продолжить"
          type="primary"
          disabled={!values.rulesCheckBox}
        />
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
