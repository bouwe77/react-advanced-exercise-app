import React from "react";
import styles from "./App.module.css";

export default ({ appInfo }) => {
  return (
    <header>
      <a href="#">
        <h1>{appInfo.logo}</h1>
      </a>
    </header>
  );
};
