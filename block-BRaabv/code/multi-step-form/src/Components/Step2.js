import React from "react";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";

const Step2 = ({ saveInput, state, next, prev }) => {
  if (state.currentStep !== 2) {
    return null;
  }

  return (
    <form className="grid col-3">
      <img className="form-img" src="../step2.jpg" alt="" />
      <div className="form-content container">
        <FormHeader state={state} />
        <section className="form-section">
          <span className="breadcrumb">Step 2/3</span>
          <h1>Message</h1>
          <fieldset>
            <div className="form-box">
              <label htmlFor="message">Message</label>

              <textarea
                onChange={saveInput}
                name="message"
                id="message"
                rows="5"
              >
                {state.message}
              </textarea>
            </div>

            <div className="choice f-left gap">
              <input
                onChange={saveInput}
                type="radio"
                id="numone"
                name="choice"
                checked={state.choice === "NumOne"}
                value="NumOne"
              />
              <label htmlFor="numone"> The number one choice</label>
              <input
                onChange={saveInput}
                type="radio"
                id="numtwo"
                name="choice"
                checked={state.choice === "NumTwo"}
                value="NumTwo"
              />{" "}
              <label htmlFor="numtwo"> The number two choice</label>
            </div>

            <FormFooter state={state} prev={prev} next={next} />
          </fieldset>
        </section>
      </div>
    </form>
  );
};

export default Step2;
