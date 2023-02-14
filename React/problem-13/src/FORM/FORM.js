import React, { useState } from "react";
import style from "./form.module.css";

export default function FORM() {
  const [user, setUser] = useState({ Name: "", Email: "", Password: "" });
  const { Name, Email, Password } = user;

  const handleChange = (e) => {
    const filedName = e.target.name;
    if (filedName === "name") {
      setUser({ Name: e.target.value, Email, Password });
    } else if (filedName === "email") {
      setUser({ Name, Email: e.target.value, Password });
    } else if (filedName === "password") {
      setUser({ Name, Email, Password: e.target.value });
    }
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
            name="name"
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
            name="email"
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
            name="password"
            id="password"
            value={Password}
            onChange={handleChange}
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
