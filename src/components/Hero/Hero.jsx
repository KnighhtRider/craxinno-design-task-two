import React from "react";
import styles from "../Hero/Hero.module.css";
import logo from "../../assets/Logo.png";

function Hero() {
  return (
    <div className={styles.hero}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>

      {/* Heading  */}
      <div className={styles.heading}>
        Helping hands always come handy when it comes to building Dreams!
      </div>

      
    </div>
  );
}

export default Hero;
