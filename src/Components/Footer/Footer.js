import React from 'react'
import styles from './footer.module.scss'

 function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
        Copyright {year} - Coder Academy
        </div>
  )
}
export default Footer;