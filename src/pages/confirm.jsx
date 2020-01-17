import React from "react";
import counter from "./../images/timer.png";
import call from "./../images/ic-call.png";
import calendar from "./../images/ic-calendar.png";
import time from "./../images/ic-time.png";
import map from "./../images/map.png";
import CheckBox from "../components/checkBox/checkBox";
import Button from "../components/button";

const Confirm = ({ handleCheckBoxChange, values }) => {
  const confirm = () => {
    console.log("Confirm pressed");
  };

  return (
    <>
      <h2 className="confirm-header">Данные сторон</h2>
      <div className="confirm-section1">
        <div className="confirm-revisor">
          <div className="confirm-revisor-title">
            <p>Константин Константинов, тел +79113745248</p>
            <span>
              <img src={call} alt="call" />
            </span>
          </div>

          <span>ревизор</span>
        </div>
        <div className="countdown">
          <img src={counter} alt="countdown" />
        </div>
      </div>
      <h2 className="confirm-header">Согласованная дата и время сделки</h2>
      <div className="confirm-section2">
        <div className="date">
          <img src={calendar} alt="calendar" />
          <span>7 августа, среда</span>
        </div>
        <div className="time">
          <img src={time} alt="time" />
          <span>с 20:30 до 22:00</span>
        </div>
      </div>

      <div className="confirm-section3">
        <h2 className="confirm-header">Выполнение заказа</h2>
        <div className="confirm-section3-step">
          <CheckBox
            checked={true}
            caption={"Принял заказ"}
            onChange={handleCheckBoxChange("CheckBox")}
          />
        </div>
        <div className="confirm-section3-step">
          <CheckBox
            checked={false}
            caption={"Выехал на адрес"}
            onChange={handleCheckBoxChange("CheckBox")}
          />
          <span className="fixtime">
            1:30<span className="fixseconds">:30</span>
          </span>
        </div>
        <div className="place">
          <h3>Местоположение</h3>
          <p className="place-address">
            {values.addressText}
            <br />
            <span>
              (Вход через служебную проходную, слева от главного входа. Салон
              “Максимум”)
            </span>
          </p>
          <span className="mapLink">Скрыть карту</span>
          <div className="map">
            <img src={map} alt="карта" />
          </div>
        </div>
        <div className="confirm-btn">
          <Button onClick={confirm} title="Подтвердить" type="primary" />
        </div>

        <div className="confirm-section3-step">
          <CheckBox
            checked={true}
            caption={"Прибыл на место"}
            onChange={handleCheckBoxChange("CheckBox")}
          />
          <span className="fixtime">
            3:15<span className="fixseconds">:45</span>
          </span>
        </div>

        <h3 className="checking">Проверка</h3>

        <div className="confirm-section3-step">
          <CheckBox
            checked={true}
            caption={"Сделать 10 фото автомобиля"}
            onChange={handleCheckBoxChange("CheckBox")}
          />
          <span className="fixtime">
            3:25<span className="fixseconds">:15</span>
          </span>
        </div>
        <h5 className="descr">Описание</h5>
        <div className="photos">
          <div className="photos-line">
            <div className="photos-loader"></div>
            <div className="photos-loader"></div>
            <div className="photos-loader"></div>
            <div className="photos-loader"></div>
            <div className="photos-loader"></div>
          </div>
          <div className="photos-line">
            <div className="photos-loader"></div>
            <div className="photos-loader"></div>
            <div className="photos-loader"></div>
            <div className="photos-loader"></div>
            <div className="photos-loader"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
