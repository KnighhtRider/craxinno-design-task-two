import React from 'react'
import styles from '../Background/Background.module.css'

function Background() {
  return (
    <div className={styles.bgLayout}>

      <div className={styles.Bg_01}>
        <div className={styles.rectangle_51}></div>
        <div className={styles.group}>
          <div className={styles.rectangle_52}></div>
          <div className={styles.rectangle_53}></div>
        </div>

      </div>
      <div className={styles.Bg_02}></div>
    </div>
  )
}

export default Background
