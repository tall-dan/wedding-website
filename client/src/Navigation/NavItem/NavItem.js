import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { camelCase } from 'lodash';
import styles from './NavItem.module.scss';

class NavItem extends Component {
  isActive = (_match, location) => {
    if (location.pathname === '/') return this.props.title === 'Our Wedding';
    return location.pathname.split('/')[1] === camelCase(this.props.title);
  };

  render() {
    const { title } = this.props;
    return (
      <div className={styles.NavItem}>
        <NavLink
          to={`/${camelCase(title)}`}
          isActive={this.isActive}
          className={styles.NavItem__Link}
          activeClassName={styles['NavItem__Link--selected']}
        >
          {title}
        </NavLink>
      </div>
    );
  }
}

NavItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default NavItem;
