import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ text }) => (
  <button type="button" className={styles.button}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired
};
export default Button;
