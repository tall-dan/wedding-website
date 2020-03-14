import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ text, onClick }) => (
  <button type="button" onClick={onClick} className={styles.button}>{text}</button>
);

Button.defaultProps = {
  onClick: () => {}
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
export default Button;
