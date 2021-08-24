import React from "react";
import "./Style/Register.css";

function Register() {
  return (
    <div className="Register">
      <span className="RegisterTitle">Register</span>
      <form className="RegisterForm">
        <label>Username</label>
        <input
          className="RegisterInput"
          type="text"
          placeholder="Enter your username..."
        />
        <label>Password</label>
        <input
          className="RegisterInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="RegisterButton">Register</button>
      </form>
      <button className="RegisterLoginButton">Login</button>
    </div>
  );
}

export default Register;
