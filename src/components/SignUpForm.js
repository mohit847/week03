import React, { useState } from "react";
import { isValidUser } from "./Validators";

const SignUpForm = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  let handleChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (
          isValidUser({
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            password: state.password,
          })
        ) {
          console.log("User is valid", state);
        } else {
          console.log("User is invalid");
        }
      }}
    >
      <label>First Name</label>
      <input
        name={"firstName"}
        type={"text"}
        value={state.firstName}
        placeholder={"First Name"}
        onChange={handleChange}
      />
      <label>Last Name</label>
      <input
        name={"lastName"}
        type={"text"}
        value={state.lastName}
        placeholder={"Last Name"}
        onChange={handleChange}
      />
      <label>Email</label>
      <input
        name={"email"}
        type={"email"}
        value={state.email}
        placeholder={"Email"}
        onChange={handleChange}
      />
      <label>Password</label>
      <input
        name={"password"}
        type={"password"}
        value={state.password}
        placeholder={"Password"}
        onChange={handleChange}
      />
      <button type={`submit`}>Submit</button>
    </form>
  );
};

export default SignUpForm;
