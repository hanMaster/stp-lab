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
    deliveryType: "курьер",
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

  handleChange = input => e => {
    if (input === "insuranceCheckBox" || input === "rulesCheckBox") {
      this.setState({ [input]: e.target.checked });
    } else if (input === "commentForRevisor") {
      this.setState({ commentForRevisor: e });
    } else if (input === "deliveryType") {
      let val = 0;
      if (e.target.value === "курьер") {
        val = 500;
      }
      this.setState({
        deliveryType: e.target.value,
        amountDelivery: val,
        amountTotal: this.state.amount + this.state.comission + 850 + val
      });
    } else if (input === "comissionPayer") {
      if (e.target.value === "buyer") {
        this.setState({
          comission: 3000,
          amountTotal:
            this.state.amount + 3000 + 850 + this.state.amountDelivery
        });
      } else if (e.target.value === "seller") {
        this.setState({
          comission: 0,
          amountTotal: this.state.amount + 850 + this.state.amountDelivery
        });
      } else {
        this.setState({
          comission: 1500,
          amountTotal:
            this.state.amount + 1500 + 850 + this.state.amountDelivery
        });
      }
    } else if (input === "openDisput") {
      this.setState({ openDisput: !this.state.openDisput });
    } else if (input === "amount") {
      let val = e.target.value;
      this.setState({
        amount: +val,
        amountTotal:
          +val + this.state.comission + 850 + this.state.amountDelivery
      });
    } else {
      this.setState({ [input]: e.target.value });
    }
  };

  changeAmount = type => {
    if (type === "up") {
      this.setState({ amount: this.state.amount + 50 });
    } else {
      this.setState({ amount: this.state.amount - 50 });
    }
  };

  render() {
    const { step } = this.state;
    const {
      executorId,
      insuranceCheckBox,
      rulesCheckBox,
      amountDelivery,
      deliveryType,
      addressText,
      orderCommentText,
      comissionPayer,
      amount,
      comission,
      amountTotal,
      commentForRevisor,
      openDisput
    } = this.state;
    const values3 = { executorId, insuranceCheckBox, rulesCheckBox };
    const values4 = {
      amountDelivery,
      deliveryType,
      addressText,
      insuranceCheckBox,
      rulesCheckBox,
      orderCommentText,
      comissionPayer,
      amount,
      comission,
      amountTotal
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
              handleChange={this.handleChange}
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
              handleChange={this.handleChange}
              values={values4}
              changeAmount={this.changeAmount}
            />
          </div>
        );
      case 5:
        return (
          <div className="wrapper">
            <Confirm values={valuesConfirm} handleChange={this.handleChange} />
          </div>
        );
      default:
        return "";
    }
  }
}

export default Main;
