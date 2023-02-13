import React, { useState } from "react";
import style from "./form.module.css";

export default function FORM() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log("form is submitted");
    console.log(Name, Email, Password);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={Name}
            onChange={handleName}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={Email}
            onChange={handleEmail}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={Password}
            onChange={handlePass}
            required
          />
        </div>
        <div className={style.formGroup}>
          <button type="submit"> Register </button>
        </div>
      </form>
    </div>
  );
}
