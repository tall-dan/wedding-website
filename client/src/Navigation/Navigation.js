import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.scss';

const Navigation = ({ children }) => (
  <nav className={styles.Navigation}>
    {children}
  </nav>
);

Navigation.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default Navigation;
