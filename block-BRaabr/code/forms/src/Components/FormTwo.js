import React from "react";

class FormTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      cpassword: "",

      errors: {
        username: "",
        email: "",
        password: "",
        cpassword: "",
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  handleChange = ({ target }) => {
    let errors = this.state.errors;
    let { name, value } = target;

    switch (name) {
      case "username":
        errors.username =
          value.length >= 3 ? "" : "Username must be at least 3 characters";
        break;

      case "email":
        errors.email = this.validateEmail(value) ? "" : "Email is not valid";
        break;

      case "password":
        errors.password =
          value.length < 6 ? "Password must be at least 6 characters" : "";
        break;

      case "cpassword":
        errors.cpassword = value ? "" : " Confirm Password is required";
        break;

      default:
        break;
    }

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Form Two</h2>

        <div className="form-box">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            onClick={this.handleChange}
            type="text"
            name="username"
          />
          <span>{this.state.errors.username}</span>
        </div>

        <div className="form-box">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            onClick={this.handleChange}
            type="email"
            name="email"
            className="error"
          />
          <span>{this.state.errors.email}</span>
        </div>

        <div className="form-box">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            onClick={this.handleChange}
            type="password"
            name="password"
          />
          <span>{this.state.errors.password}</span>
        </div>

        <div className="form-box">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            onClick={this.handleChange}
            type="password"
            id="cpassword"
            name="cpassword"
          />
          <span>{this.state.errors.cpassword}</span>
        </div>

        <input type="submit" name="" />
      </form>
    );
  }
}

export default FormTwo;
