import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

// target is misused here, I didn't know that was already an attribute of anchor tags
const Button = ({
  text, onClick, target, disabled, newTab
}) => {
  if (target) {
    return (
      <>
        <a href={target} className={styles.button__link} target={newTab ? '_blank' : ''}>
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
  disabled: false,
  newTab: false
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  target: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  newTab: PropTypes.bool
};
export default Button;
