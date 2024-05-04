import React from 'react'
import styles from '../ContainerLayout/ContainerLayout.module.css'
import Group from './Group/Group'
import Background from './Background/Background'

function ContainerLayout() {
  return (
    <div className={styles.container}>
      {/* Group */}
      <Group />
      <Background />
    </div>
  )
}

export default ContainerLayout
