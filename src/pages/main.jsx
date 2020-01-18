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
    deliveryType: "курьером",
    addressText: "Санкт-Петербург, ул.Комиссара Смирнова, д. 15, оф. 343",
    orderCommentText: "bla bla",
    amount: 10500,
    comission: 1500,
    comissionPayer: "50/50",
    amountExecutor: 500,
    amountExtra: 350,
    amountDelivery: 500,
    amountTotal: 13350,
    commentForRevisor: "Нужны фото салона",
    openDisput: false
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

  handleChange = input => e => {
    if (input === "commentForRevisor") {
      this.setState({ commentForRevisor: e });
    } else if (input === "comissionPayer") {
      if (e.target.value === "buyer") {
        this.setState({ comission: 3000 });
      } else if (e.target.value === "seller") {
        this.setState({ comission: 0 });
      } else {
        this.setState({ comission: 1500 });
      }
    } else if (input === "openDisput") {
      this.setState({ openDisput: !this.state.openDisput });
    } else if (input === "amount") {
      let val = e.target.value;
      val = val.substring(0, val.length - 3);
      this.setState({ amount: val });
    } else {
      this.setState({ [input]: e.target.value });
    }
  };

  render() {
    const { step } = this.state;
    const {
      executorId,
      insuranceCheckBox,
      rulesCheckBox,
      deliveryType,
      addressText,
      orderCommentText,
      comissionPayer,
      amount,
      comission,
      commentForRevisor,
      openDisput
    } = this.state;
    const values3 = { executorId, insuranceCheckBox, rulesCheckBox };
    const values4 = {
      deliveryType,
      addressText,
      insuranceCheckBox,
      rulesCheckBox,
      orderCommentText,
      comissionPayer,
      amount,
      comission
    };

    const valuesConfirm = {
      executorId,
      addressText,
      commentForRevisor,
      openDisput
    };

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
              handleChange={this.handleChange}
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
              handleChange={this.handleChange}
            />
          </div>
        );
      default:
        return "";
    }
  }
}

export default Main;
