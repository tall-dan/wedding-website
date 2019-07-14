import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { camelCase } from 'lodash';
import styles from './NavItem.module.scss';

const NavItem = ({ title }) => (
  <div className={styles.NavItem}>
    <Link to={camelCase(title)}>{title}</Link>
  </div>
);

NavItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default NavItem;
