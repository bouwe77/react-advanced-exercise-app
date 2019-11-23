import React from "react";
import styles from "./App.module.css";

export default ({ appInfo }) => (
  <footer>
    <hr />
    <span className={styles.emphasis}>{appInfo.appLongName}</span> is made by{" "}
    <a href={appInfo.website}>{appInfo.author}</a>
  </footer>
);
