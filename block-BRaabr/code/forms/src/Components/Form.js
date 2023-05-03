import React from "react";

const Form = () => {
  return (
    <form>
      <h2>Form One</h2>
      <div className="form-box">
        <label htmlFor="input-text">Text Input</label>
        <input id="input-text" type="text" name="input-text" />
      </div>

      <div className="form-box">
        <label htmlFor="input-date">Date Input</label>
        <input id="input-date" type="date" name="input-date" />
      </div>

      <div className="form-box">
        <label htmlFor="input-file">file Input</label>
        <input id="input-file" type="file" name="input-file" />
      </div>

      <div className="form-box">
        <label htmlFor="input-read-only">Read Only Input</label>
        <input
          id="input-read-only"
          readOnly
          type="text"
          name="input-read-only"
          value="This can only be copied"
        />
      </div>

      <div className="form-box">
        <label htmlFor="input-disabled">Disabled Input</label>
        <input id="input-disabled" disabled type="text" name="input-disabled" />
      </div>

      <div className="form-box">
        <label htmlFor="textarea">Text Area</label>
        <textarea id="textarea" rows="" cols=""></textarea>
      </div>

      <div className="form-box">
        <label htmlFor="disable-textarea">Text Area Disabled</label>
        <textarea id="disable-textarea" disabled rows="" cols=""></textarea>
      </div>
    </form>
  );
};
export default Form;
