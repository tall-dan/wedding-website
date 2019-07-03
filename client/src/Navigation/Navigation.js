import React, { Component } from 'react';
import styles from './Navigation.module.scss'

class Navigation extends Component {
  render() {
    return (
      <nav className={styles.Navigation}>
        {this.props.children}
      </nav>
    )
  }
}

export default Navigation;
