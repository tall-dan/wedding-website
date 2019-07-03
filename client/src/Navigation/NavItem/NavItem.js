import React from 'react';
import styles from './NavItem.module.scss'

const NavItem = ({title}) => (
  <div className={styles.NavItem}> {title} </div>
)

export default NavItem
