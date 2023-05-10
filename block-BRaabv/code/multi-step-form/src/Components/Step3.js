import React from "react";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";

const Step3 = ({ saveInput, state, submit, prev }) => {
  if (state.currentStep !== 3) {
    return null;
  }

  return (
    <form className="grid col-3">
      <img className="form-img" src="../step3.jpg" alt="" />
      <div className="form-content container">
        <FormHeader state={state} />
        <section className="form-section">
          <span className="breadcrumb">Step 3/3</span>
          <h1>Checkbox</h1>
          <fieldset>
            <div className="checkbox grid col-2">
              <div>
                <label
                  className={state.checkboxOne ? "active" : ""}
                  htmlFor="checkboxOne"
                >
                  <img
                    src="../undraw_Fingerprint_login_re_t71l.png"
                    alt="checkboxOne"
                  />
                </label>
                <input
                  onChange={saveInput}
                  id="checkboxOne"
                  type="checkbox"
                  name="checkboxOne"
                  value={!state.checkboxOne}
                />
              </div>

              <div>
                <label
                  className={state.checkboxTwo ? "active" : ""}
                  htmlFor="checkboxTwo"
                >
                  <img src="../undraw_Appreciation_y90s.png" alt="" />
                </label>
                <input
                  onChange={saveInput}
                  type="checkbox"
                  id="checkboxTwo"
                  name="checkboxTwo"
                  value={!state.checkboxTwo}
                />
              </div>
            </div>

            <div className="last-radio">
              <label className="full-width">
                <input
                  onChange={saveInput}
                  type="radio"
                  checked={state.options === "thisOptions"}
                  name="options"
                  value="thisOptions"
                />
                I want to add this option.
              </label>

              <label className="full-width">
                <input
                  onChange={saveInput}
                  type="radio"
                  checked={state.options === "coolStuff"}
                  name="options"
                  value="coolStuff"
                />
                Let me click on this checkbox and choose some cool stuff.
              </label>
            </div>

            <FormFooter state={state} prev={prev} submit={submit} />
          </fieldset>
        </section>
      </div>
    </form>
  );
};

export default Step3;
