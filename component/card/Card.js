import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <main className={styles.main}>
      <div className={styles.card}>{props.children}</div>
    </main>
  );
};

export default Card;
