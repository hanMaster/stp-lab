import React, { useState } from "react";
import TextArea from "@atlaskit/textarea";
import InlineEdit from "@atlaskit/inline-edit";
import styled from "styled-components";
import { gridSize, fontSize } from "@atlaskit/theme";
import counter from "./../images/timer.png";
import call from "./../images/ic-call.png";
import calendar from "./../images/ic-calendar.png";
import time from "./../images/ic-time.png";
import map from "./../images/map.png";
import CheckBox from "../components/checkBox/checkBox";
import Button from "../components/button";
import executors from "./../data/data";
import Disput from "./disput";
// import PhotoLoader from "../components/photoLoader/PhotoLoader";

const minRows = 2;
const textAreaLineHeightFactor = 2.5;
const ReadViewContainer = styled.div`
  line-height: ${(gridSize() * textAreaLineHeightFactor) / fontSize()};
  min-height: ${gridSize() * textAreaLineHeightFactor * minRows}px;
  padding: ${gridSize() - 2}px ${gridSize() - 2}px;
  word-break: break-word;
`;

const Confirm = ({ values, handleChange }) => {
  const confirm = () => {
    console.log("Confirm pressed");
  };

  const [mapVisibility, setMapVisibility] = useState(false);

  const showMap = () => {
    setMapVisibility(!mapVisibility);
  };

  const [loadedFiles, setFiles] = useState([]);
  const [currentFile, setFile] = useState({ id: null, file: null });

  let inputElement;

  const onFileChange = e => {
    if (e.target.files[0]) {
      let name = e.target.files[0].name;
      name = name.split(".");
      name = "." + name[1];
      setFile({ ...currentFile, file: name });
      setFiles([...loadedFiles, { ...currentFile, file: name }]);
    }
  };

  const handleClick = position => e => {
    setFile({ id: position });
    inputElement.click();
  };

  return (
    <>
      <h2 className="confirm-header">Данные сторон</h2>
      <div className="confirm-section1">
        <div className="confirm-revisor">
          <div className="confirm-revisor-title">
            <p>
              {executors[values.executorId - 1].title}, тел{" "}
              {executors[values.executorId - 1].phone}
            </p>
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
            onChange={handleChange("CheckBox")}
          />
        </div>
        <div className="confirm-section3-step">
          <CheckBox
            checked={false}
            caption={"Выехал на адрес"}
            onChange={handleChange("CheckBox")}
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

          <span className="mapLink" onClick={showMap}>
            {mapVisibility ? "Скрыть карту" : "Показать на карте"}
          </span>
          {mapVisibility && (
            <div className="map">
              <img src={map} alt="карта" />
            </div>
          )}
        </div>
        <div className="confirm-btn">
          <Button onClick={confirm} title="Подтвердить" type="primary" />
        </div>
        <div className="confirm-section3-step">
          <CheckBox
            checked={true}
            caption={"Прибыл на место"}
            onChange={handleChange("CheckBox")}
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
            onChange={handleChange("CheckBox")}
            color={loadedFiles.length >= 3 ? "#333333" : "red"}
          />
          <span className="fixtime">
            3:25<span className="fixseconds">:15</span>
          </span>
        </div>
        <h5 className="descr">Описание</h5>
        <div className="photos">
          <div className="photos-line">
            <input
              type="file"
              className="photos-file"
              accept="video/*, image/*"
              ref={input => (inputElement = input)}
              onChange={onFileChange}
            />

            <div className="photos-loader" onClick={handleClick(1)}>
              {loadedFiles[0] && loadedFiles[0].file}
            </div>
            <div className="photos-loader" onClick={handleClick(2)}>
              {loadedFiles[1] && loadedFiles[1].file}
            </div>
            <div className="photos-loader" onClick={handleClick(3)}>
              {loadedFiles[2] && loadedFiles[2].file}
            </div>
            <div className="photos-loader" onClick={handleClick(4)}>
              {loadedFiles[3] && loadedFiles[3].file}
            </div>
            <div className="photos-loader" onClick={handleClick(5)}>
              {loadedFiles[4] && loadedFiles[4].file}
            </div>
          </div>
          <div className="photos-line">
            <div className="photos-loader" onClick={handleClick(6)}>
              {loadedFiles[5] && loadedFiles[5].file}
            </div>
            <div className="photos-loader" onClick={handleClick(7)}>
              {loadedFiles[6] && loadedFiles[6].file}
            </div>
            <div className="photos-loader" onClick={handleClick(8)}>
              {loadedFiles[7] && loadedFiles[7].file}
            </div>
            <div className="photos-loader" onClick={handleClick(9)}>
              {loadedFiles[8] && loadedFiles[8].file}
            </div>
            <div className="photos-loader" onClick={handleClick(10)}>
              {loadedFiles[9] && loadedFiles[9].file}
            </div>
          </div>
        </div>
        <div
          style={{
            padding: `${gridSize()}px ${gridSize()}px ${gridSize() * 6}px`,
            width: "100%"
          }}
        >
          <InlineEdit
            defaultValue={values.commentForRevisor}
            label="Комментарий для ревизора"
            editView={(fieldProps, ref) => (
              <TextArea {...fieldProps} ref={ref} />
            )}
            readView={() => (
              <ReadViewContainer>
                {values.commentForRevisor || "Нажмите для ввода"}
              </ReadViewContainer>
            )}
            onConfirm={handleChange("commentForRevisor")}
            keepEditViewOpenOnBlur
            readViewFitContainerWidth
          />
        </div>
        <div
          className="buttons"
          style={{ justifyContent: "flex-end", marginTop: "15px" }}
        >
          <Button title="Отклонить" type="reject" />
          <Button title="Подтвердить" type="primary" />
        </div>
        <div className="confirm-section3-step">
          <CheckBox
            checked={false}
            caption={"Проверка лакокрасочного покрытия"}
            onChange={handleChange("CheckBox")}
          />
        </div>
        <div className="confirm-section3-step">
          <CheckBox
            checked={true}
            caption={"Проверка кузова на участие в ДТП"}
            onChange={handleChange("CheckBox")}
          />
        </div>
        <div className="confirm-section3-step">
          <CheckBox
            checked={true}
            caption={"Проверка силовых частей кузова"}
            onChange={handleChange("CheckBox")}
          />
        </div>
        <div className="confirm-section3-step">
          <CheckBox
            checked={true}
            caption={"Компьютерная диагностика"}
            onChange={handleChange("CheckBox")}
          />
        </div>
        <div className="confirm-section3-step">
          <CheckBox
            checked={true}
            caption={"Проверка остекления и оптики"}
            onChange={handleChange("CheckBox")}
          />
        </div>
        <div className="confirm-section3-step">
          <CheckBox
            checked={true}
            caption={"Видеозвонок"}
            onChange={handleChange("CheckBox")}
          />
        </div>
        <div className="confirm-section3-step">
          <h4>Принять работу?</h4>
        </div>
        <div
          className="buttons"
          style={{
            justifyContent: "flex-start",
            margin: "40px 0 20px -20px"
          }}
        >
          <span
            style={{
              marginRight: "36px"
            }}
          >
            <Button title="Заказ выполнен" type="primary" />
          </span>

          <Button
            title="Открыть спор"
            type="primary"
            onClick={handleChange("openDisput")}
          />
        </div>

        <p style={{ marginLeft: "-20px" }}>
          Внимание! Заказ будет считаться завершенным через 3 дня, при
          отсутствии активности со стороны заказчика.
        </p>

        {values.openDisput && <Disput />}
      </div>
    </>
  );
};

export default Confirm;
