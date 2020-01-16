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
    addressText: "Санкт-Петербург, ул.Комисара Смирнова, д. 15, оф. 343",
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

  handleChange = (input, value) => {
    this.setState({ [input]: value });
  };

  render() {
    const { step } = this.state;
    const { executorId, insuranceCheckBox } = this.state;
    const values = { executorId, insuranceCheckBox };

    switch (step) {
      case 3:
        return (
          <div className="wrapper">
            <Step3
              step={step}
              nextStep={this.nextStep}
              values={values}
              handleChange={this.handleChange}
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
            />
          </div>
        );
      case 5:
        return <Confirm />;
      default:
        return "";
    }
  }
}

export default Main;
