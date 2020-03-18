import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { validateAll } from "indicative";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      first_name: "",
      last_name: "",
      mobile_number: "",
      hasAgreed: false,
      password_has_error: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // checkPassword() {
  //   if (
  //     !this.state.password ||
  //     this.state.password != this.state.password_confirmation
  //   ) {
  //     this.setState({ password_has_error: true });
  //   } else {
  //     this.setState({ password_has_error: false });
  //   }
  // }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    await axios
      .post("http://localhost:3003/user/create", this.state)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="first_name">
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              className="FormField__Input"
              placeholder="Enter your first name"
              name="first_name"
              value={this.state.first_name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="last_name">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              className="FormField__Input"
              placeholder="Enter your last name"
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="Mobile">
              Phone
            </label>
            <input
              type="tel"
              id="tel"
              className="FormField__Input"
              placeholder="Enter your phone number"
              name="mobile_number"
              minLength="10"
              maxLength="10"
              value={this.state.mobile_number}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password_confirmation">
              Confirm Password
            </label>
            <input
              type="password"
              id="password_confirmation"
              className="FormField__Input"
              placeholder="Confirm password"
              name="password_confirmation"
              value={this.state.password_confirmation}
              valid={
                this.state.password &&
                this.state.password === this.state.password_confirmation
              }
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input
                className="FormField__Checkbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
                required
              />{" "}
              I agree all statements in{" "}
              <a href="" className="FormField__TermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="FormField">
            <button
              className="FormField__Button mr-20"
              onSubmit={this.handleSubmit}
            >
              Sign Up
            </button>{" "}
            <Link to="/sign-in" className="FormField__Link">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
