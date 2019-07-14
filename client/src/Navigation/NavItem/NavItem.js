import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { camelCase } from 'lodash';
import styles from './NavItem.module.scss';

const NavItem = ({ title }) => (
  <div className={styles.NavItem}>
    <NavLink
      to={`/${camelCase(title)}`}
      className={styles.NavItem__Link}
      activeClassName={styles['NavItem__Link--selected']}
    >
      {title}
    </NavLink>
  </div>
);

NavItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default NavItem;
