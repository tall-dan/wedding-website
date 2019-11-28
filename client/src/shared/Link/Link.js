import React from 'react';
import PropTypes from 'prop-types';
import styles from './Link.module.scss';

const Link = ({ href, children }) => (
  <a href={href} className={styles.link}>{children}</a>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Link;
