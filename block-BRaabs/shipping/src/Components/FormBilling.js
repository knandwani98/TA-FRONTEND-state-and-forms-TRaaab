import React from "react";

const FormBilling = () => {
  return (
    <form>
      <h2>Billing Address</h2>

      <div>
        <input type="checkbox" id="checkbox" name="checkbox" value="" />
        <label htmlFor="checkbox">Same as the Shipping Address?</label>
      </div>

      <div className="form-box">
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" />
      </div>

      <div className="form-box">
        <label htmlFor="zip">ZIP/Postal Code</label>
        <input type="text" id="zip" name="zip" />
      </div>

      <div className="form-box">
        <label htmlFor="city">City</label>
        <input type="text" id="city" name="city" />
      </div>

      <div className="form-box">
        <label htmlFor="country">Country</label>
        <input type="text" id="country" name="country" />
      </div>
    </form>
  );
};

export default FormBilling;
