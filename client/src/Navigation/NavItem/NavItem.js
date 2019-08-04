import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { camelCase } from 'lodash';
import styles from './NavItem.module.scss';

class NavItem extends Component {
  isActive = (_match, location) => {
    if (location.pathname === '/') return this.props.title === 'Our Wedding';
    return location.pathname === `/${camelCase(this.props.title)}`;
  };

  render() {
    return (
      <div className={styles.NavItem}>
        <NavLink
          to={`/${camelCase(this.props.title)}`}
          isActive={this.isActive}
          className={styles.NavItem__Link}
          activeClassName={styles['NavItem__Link--selected']}
        >
          {this.props.title}
        </NavLink>
      </div>
    );
  }
}

NavItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default NavItem;
