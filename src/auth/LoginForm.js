import React, { useState } from "react";
import "./LoginForm.module.css";

export default ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        login(username, password);
      }}
    >
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};
