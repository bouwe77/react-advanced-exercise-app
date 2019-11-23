import React, { useState } from "react";
import styles from "./LoginForm.module.css";

export default function LoginForm({ signIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        signIn(username, password);
      }}
    >
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={event => setUsername(event.target.value)}
        className={styles["login-box"]}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
        className={styles["login-box"]}
      />
      <button type="submit">Sign In</button>
    </form>
  );
}
