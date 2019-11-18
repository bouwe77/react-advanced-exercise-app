import React from "react";
import styles from "./Gifs.module.css";

function Gifs({ gifs }) {
  return (
    <div className={styles["gifs-container"]}>
      <div className={styles["row"]}>
        {gifs.map(gif => (
          <div className={styles["item"]} key={gif}>
            <video autoPlay loop src={gif} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gifs;
