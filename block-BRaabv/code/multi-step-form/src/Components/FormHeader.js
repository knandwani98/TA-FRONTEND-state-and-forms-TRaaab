import React from "react";

const FormHeader = ({ state }) => {
  return (
    <>
      <header className="form-header">
        <nav className="nav">
          <ul className="f-left">
            <li className="flex">
              <span
                className={
                  state.currentStep === 1 ? "f-center active" : "f-center"
                }
              >
                1
              </span>
              Sign Up
            </li>
            <li className="flex">
              <span
                className={
                  state.currentStep === 2 ? "f-center active" : "f-center"
                }
              >
                2
              </span>
              Message
            </li>
            <li className="flex">
              <span
                className={
                  state.currentStep === 3 ? "f-center active" : "f-center"
                }
              >
                3
              </span>
              Checkbox
            </li>
          </ul>
        </nav>
      </header>
      <hr />
    </>
  );
};

export default FormHeader;
