import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

class MasterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      firstname: "",
      lastname: "",
      dob: "",
      email: "",
      address: "",
      message: "",
      choice: "NumOne",
      checkboxOne: false,
      checkboxTwo: false,
      options: "",
    };
  }

  handleChange = ({ target }) => {
    let { name, value, checked } = target;

    if (name === "checkboxOne" || name === "checkboxTwo") {
      return this.setState({
        [name]: checked,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  handlePrev = () => {
    let currentStep = this.state.currentStep;
    this.setState({
      currentStep: currentStep - 1,
    });
  };

  handleNext = () => {
    let currentStep = this.state.currentStep;
    this.setState({
      currentStep: currentStep + 1,
    });
  };

  handleSubmit = () => {
    alert(
      `Thank You For Submiting your form ${
        this.state.firstname + this.state.lastname
      }`
    );
  };

  render() {
    return (
      <>
        <Step1
          prev={this.handlePrev}
          next={this.handleNext}
          state={this.state}
          saveInput={this.handleChange}
        />

        <Step2
          prev={this.handlePrev}
          next={this.handleNext}
          state={this.state}
          saveInput={this.handleChange}
        />

        <Step3
          prev={this.handlePrev}
          submit={this.handleSubmit}
          state={this.state}
          saveInput={this.handleChange}
        />
      </>
    );
  }
}

export default MasterForm;
