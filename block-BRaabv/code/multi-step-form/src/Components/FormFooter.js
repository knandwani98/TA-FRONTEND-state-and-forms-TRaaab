import React from "react";

const FormFooter = ({ next, prev, state, submit }) => {
  return (
    <>
      <footer className="form-footer">
        <div className="f-right">
          {state.currentStep > 1 ? (
            <button onClick={prev} className="none prev">
              Back
            </button>
          ) : (
            ""
          )}
          {state.currentStep < 3 ? (
            <button onClick={next} className="pink next">
              Next
            </button>
          ) : (
            ""
          )}
          {state.currentStep === 3 ? (
            <button onClick={submit} className="pink submit">
              Submit
            </button>
          ) : (
            ""
          )}
        </div>
      </footer>
    </>
  );
};

export default FormFooter;
