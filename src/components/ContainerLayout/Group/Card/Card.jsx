import React from "react";
import styles from "../Card/Card.module.css";
// import fbIcon from "../../../../assets/Icon.png";

function Card({stats}) {
  return (
    <div className={styles.card}>
      <div className={styles.pattern}>
        <div className={styles.rectangle_43}></div>
        <div className={styles.rectangle_62}></div>
      </div>
      {/* Content */}
      <div className={styles.content}>
        <div className={styles.icon}>
          <img src={stats.logo} alt="" />
        </div>

        {/* Text */}
        <div className={styles.text}>
          <div className={styles.heading}>{stats.heading}</div>
          <div className={styles.title}>
            {stats.title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
