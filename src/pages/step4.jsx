import React from "react";
import Button from "../components/button";
import BreadCrumb from "../components/breadCrumb";
import PropTypes from "prop-types";

const Step4 = ({ step, nextStep, prevStep }) => {
  return (
    <>
      <BreadCrumb step={step} />
      <h1>step4</h1>
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
