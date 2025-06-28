import React from "react";
import styles from "./Cuarto.module.css";

export const Cuarto = ({ img, name, desc }) => {

  return (
    <>
      <div className={styles.cuerpo}>
        <div className={styles.principal}>
          <div className={styles.p2}>
            <img className={styles.imagen} src={img} />
          </div>

          <p>{name} </p>
          <p className={styles.second}>{desc}</p>
        </div>
      </div>
    </>
  );
};
