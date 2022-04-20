import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({
  text, onClick, target, disabled
}) => {
  if (target) {
    return (
      <>
        <a href={target} className={styles.button__link}>
          <button type="button" onClick={onClick} disabled={disabled} className={styles.button}>{text}</button>
        </a>
      </>
    );
  }

  return (<button type="button" onClick={onClick} disabled={disabled} className={styles.button}>{text}</button>);
};

Button.defaultProps = {
  onClick: () => {},
  target: '',
  disabled: false
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  target: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};
export default Button;
