import React from "react";
import styles from "../Group/Group.module.css";
import Card from "./Card/Card";

import facebookLogo from "../../../assets/facebook-logo.png";
import twitterLogo from "../../../assets/twitter-logo.png";
import googleLogo from "../../../assets/google-logo.png";

function Group() {
  const handleButtonClick = () => {
    // Add your button click logic here
    alert("Button clicked!");
  };

  return (
    <div className={styles.group}>
      {/* Content */}
      <div className={styles.content}>
        {/* Facebook Twitter Integration */}
        <div className={styles.fb_tw_group}>
          <div className={styles.fb}>
            <Card
              stats={{
                logo: facebookLogo,
                heading: "Facebook",
                title:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus dui faucibus eu.",
              }}
            />
          </div>
          <div className={styles.tw}>
            <Card
              stats={{
                logo: twitterLogo,
                heading: "Twitter",
                title:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus dui faucibus eu.",
              }}
            />
          </div>
        </div>

        {/* Google Card */}
        <div className={styles.google_card}>
          <Card
            stats={{
              logo: googleLogo,
              heading: "Google",
              title:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus dui faucibus eu.",
            }}
          />
        </div>
      </div>

      {/* Title */}
      <div className={styles.title}>
        <div className={styles.frame}>
          <div className={styles.frame_01}>
            <div className={styles.heading}>Integrated with Social Media</div>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut
              id nisl tellus rhoncus, imperdiet consequat ornare.{" "}
            </div>
          </div>
          <div className={styles.button} onClick={handleButtonClick}>
            <div className={styles.buttonText}>Learn More</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
