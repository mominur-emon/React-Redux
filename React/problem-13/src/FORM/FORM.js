import React, { useState } from "react";
import style from "./form.module.css";

export default function FORM() {
  const [user, setUser] = useState({ Name: "", Email: "", Password: "" });
  const { Name, Email, Password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("form is submitted");
    console.log(user);
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
            name="Name"
            id="name"
            value={Name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="Email"
            id="email"
            value={Email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="Password"
            id="password"
            value={Password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.formGroup}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
