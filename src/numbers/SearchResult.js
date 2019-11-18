import React from "react";
import styles from "./Numbers.module.css";

export default function({ result }) {
  return (
    <>
      <div>
        <div className={styles["found-text"]}>
          {result && (
            <blockquote>
              <p>{result}</p>
              <footer>-- Numbers API</footer>
            </blockquote>
          )}
        </div>
      </div>
    </>
  );
}
