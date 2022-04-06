import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonRow.module.scss';

const ButtonRow = ({ children }) => (
  <div className={styles.ButtonRow}>
    {children}
  </div>
);

ButtonRow.propTypes = {
  children: PropTypes.node.isRequired
};
export default ButtonRow;
