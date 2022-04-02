import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.scss';

function Checkbox({
  label, defaultChecked, id, onChange
}) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <label>
      <input
        type="checkbox"
        value={id}
        defaultChecked={defaultChecked}
        id={id}
        onChange={(event) => {
          setIsChecked(!isChecked);
          onChange(event.target.checked, event.target.value);
        }}
      />
      <svg
        className={classnames(styles.checkbox, isChecked ? styles.checkbox__active : '')}
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
      {label}
    </label>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  defaultChecked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

Checkbox.defaultProps = {
  defaultChecked: false,
  label: undefined
};

export default Checkbox;
