import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavItem.module.scss';

const NavItem = ({ title }) => (
  <div className={styles.NavItem}>
    {title}
  </div>
);

NavItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default NavItem;
