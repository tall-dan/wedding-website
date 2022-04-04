import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.scss';

function Checkbox({
  label, defaultChecked, id, onChange, children
}) {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const change = (event) => {
    const newVal = !isChecked;
    setIsChecked(newVal);
    onChange(newVal, id);
  };

  return (
    <label>
      <input
        type="checkbox"
        value={id}
        defaultChecked={defaultChecked}
        id={id}
      />
      <div onClick={change} className={classnames(styles.checkbox, isChecked ? styles.checkbox__active : '')}>
        <svg
          className={classnames(styles.check, isChecked ? '' : styles.check__unchecked)}
        // This element is purely decorative so
        // we hide it for screen readers
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none"
        >
          <path
            d="M3 5.8L5 9L10 1"
            strokeWidth="2"
            stroke={isChecked ? '#fff' : 'none'}
          />
        </svg>
        <span>
          {children}
        </span>
      </div>
    </label>
  );
}

Checkbox.propTypes = {
  label: PropTypes.node,
  defaultChecked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

Checkbox.defaultProps = {
  defaultChecked: false
};

export default Checkbox;
