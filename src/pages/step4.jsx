import React, { useState } from "react";
import { RadioGroup } from "@atlaskit/radio";
import { OptionsPropType } from "@atlaskit/radio/types";
import Button from "../components/button";
import BreadCrumb from "../components/breadCrumb";
import PropTypes from "prop-types";
import CheckBox from "../components/checkBox/checkBox";
import map from "./../images/map.png";

const options: OptionsPropType = [
  {
    name: "deliveryType",
    value: "курьером",
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
  handleCheckBoxChange,
  handleChange
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
          value={values.orderCommentText}
          onChange={handleChange("orderCommentText")}
        />
      </div>

      <div className="deal">
        <h2>Ваша сделка</h2>
        <div className="amount">
          <label htmlFor="amount_id" className="amount-label">
            Стоимость сделки *
          </label>
          <input
            type="text"
            id="amount_id"
            className="amount-input"
            value={`${values.amount} Р.`}
            onChange={handleChange("amount")}
          />
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
          <p>Доставка курьером по городу: 500 Р.</p>
          <span className="amount-total">итого: 13550 Р.</span>
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
