import React from "react";

class FormShipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      zip: "",
      city: "",
      country: "",
    };

    // props.data = this.state;
  }

  handleChange = ({ target }) => {
    let { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form>
        <h2>Shipping Address</h2>
        <div className="form-box">
          <label htmlFor="address">Address</label>
          <input
            onChange={this.handleChange}
            type="text"
            id="address"
            name="address"
            value={this.state.address}
          />
        </div>

        <div className="form-box">
          <label htmlFor="zip">ZIP/Postal Code</label>
          <input
            onChange={this.handleChange}
            type="text"
            id="zip"
            name="zip"
            value={this.state.zip}
          />
        </div>

        <div className="form-box">
          <label htmlFor="city">City</label>
          <input
            onChange={this.handleChange}
            type="text"
            id="city"
            name="city"
            value={this.state.city}
          />
        </div>

        <div className="form-box">
          <label htmlFor="country">Country</label>
          <input
            onChange={this.handleChange}
            type="text"
            id="country"
            name="country"
            value={this.state.country}
          />
        </div>
      </form>
    );
  }
}

export default FormShipping;
