import React from "react";
import Button from "../components/button";

const Disput = () => {
  return (
    <div className="disput">
      <h2 className="confirm-header">Укажите причину открытия спора</h2>
      <select className="disput-select">
        <option value="1">Не выполнены необходимые требования</option>
        <option value="2">Не выполнены необходимые требования</option>
        <option value="3">Не выполнены необходимые требования</option>
        <option value="4">Не выполнены необходимые требования</option>
      </select>
      <h2 className="confirm-header">Требования</h2>
      <select className="disput-select">
        <option value="1">Частичная выплата</option>
        <option value="2">Частичная выплата</option>
        <option value="3">Частичная выплата</option>
        <option value="4">Частичная выплата</option>
      </select>
      <textarea className="disput-comment" placeholder="Введите текст" />
      <div className="disput-submit">
        <Button title="Открыть спор" type="primary" />
      </div>
      <h2 className="confirm-header">Решение</h2>
      <p>
        В течении 3х дней мы изучим вопрос и результаты вы получите по окончанию
        спора.
      </p>
    </div>
  );
};

export default Disput;
