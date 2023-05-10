import React from "react";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";

const Step1 = ({ saveInput, state, next, prev }) => {
  if (state.currentStep !== 1) {
    return null;
  }

  return (
    <form className="grid col-3">
      <img className="form-img" src="../step1.jpg" alt="" />
      <div className="form-content container">
        <FormHeader state={state} />
        <section className="form-section">
          <span className="breadcrumb">Step 1/3</span>
          <h1>Sign UP</h1>
          <fieldset>
            <div className="grid col-2">
              <div className="form-box">
                <label htmlFor="firstname">First Name</label>
                <input
                  onChange={saveInput}
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={state.firstname}
                />
              </div>

              <div className="form-box ">
                <label htmlFor="lastname">Last Name</label>
                <input
                  onChange={saveInput}
                  id="lastname"
                  type="text"
                  name="lastname"
                  value={state.lastname}
                />
              </div>

              <div className="form-box ">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  onChange={saveInput}
                  id="dob"
                  type="date"
                  name="dob"
                  value={state.dob}
                />
              </div>

              <div className="form-box ">
                <label htmlFor="email">Email </label>
                <input
                  onChange={saveInput}
                  id="email"
                  type="email"
                  name="email"
                  value={state.email}
                />
              </div>

              <div className="form-box address">
                <label htmlFor="address">Address</label>
                <input
                  onChange={saveInput}
                  id="address"
                  type="text"
                  name="address"
                  value={state.address}
                />
              </div>
            </div>
            <FormFooter state={state} prev={prev} next={next} />
          </fieldset>
        </section>
      </div>
    </form>
  );
};

export default Step1;
