import React, { Component } from "react";
import Step3 from "./step3";
import Step4 from "./step4";
import Confirm from "./confirm";

class Main extends Component {
  state = {
    step: 3,
    executorId: 3,
    insuranceCheckBox: true,
    rulesCheckBox: false,
    deliveryTypeRadio: 0,
    addressText: "Санкт-Петербург, ул.Комиссара Смирнова, д. 15, оф. 343",
    orderCommentText: "",
    amountNumber: 10500,
    comissionNumber: 1500,
    comissionPayerRadio: 2,
    amountExecutorNumber: 500,
    amountExtraNumber: 350,
    amountDeliveryNumber: 500,
    amountTotalNumber: 13350
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleExecutorIdChange = value => {
    this.setState({ executorId: value });
  };

  handleCheckBoxChange = input => e => {
    this.setState({ [input]: e.target.checked });
  };

  render() {
    const { step } = this.state;
    const {
      executorId,
      insuranceCheckBox,
      rulesCheckBox,
      deliveryTypeRadio,
      addressText
    } = this.state;
    const values3 = { executorId, insuranceCheckBox, rulesCheckBox };
    const values4 = {
      deliveryTypeRadio,
      addressText,
      insuranceCheckBox,
      rulesCheckBox
    };

    const valuesConfirm = { addressText };

    switch (step) {
      case 3:
        return (
          <div className="wrapper">
            <Step3
              step={step}
              nextStep={this.nextStep}
              values={values3}
              handleCheckBoxChange={this.handleCheckBoxChange}
              handleExecutorIdChange={this.handleExecutorIdChange}
            />
          </div>
        );
      case 4:
        return (
          <div className="wrapper">
            <Step4
              step={this.state.step}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleCheckBoxChange={this.handleCheckBoxChange}
              values={values4}
            />
          </div>
        );
      case 5:
        return (
          <div className="wrapper">
            <Confirm
              handleCheckBoxChange={this.handleCheckBoxChange}
              values={valuesConfirm}
            />
          </div>
        );
      default:
        return "";
    }
  }
}

export default Main;
