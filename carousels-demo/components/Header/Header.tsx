import React from 'react'
import styles from './Header.module.scss'
function Header() {
  return (
    <div className={`${styles.header} h-10 bg-white w-screen flex justify-between items-center`}>
      <span className="pl-4">Tape 120</span>
      <span className="pr-4">Hamburguer</span>
    </div>
  )
}

export default Header
