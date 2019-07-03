import React, { Component } from 'react';
import styles from './Header.module.scss'

class Header extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <span>{styles.Header}</span>
        <img src="https://static.xoedge.com/xo-guest-services/assets/guest/themes/at_last-dark_gray/theme_image-84680f8ae087b2b676c7d5120efda905.png"
          alt="our-wedding" />
      </header>
    )
  }
}

export default Header;
