import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import respondToInvites from '../../../../queries/respondToInvites'
import styles from './SelectionRow.module.scss';
import classnames from 'classnames';

const SelectionRow = ({id, value, checked, onChange, minWidth,children}) => {
  const [respond] = useMutation(respondToInvites);

  const persistChange = (changeEvent, r = respond) => {
    const selection = changeEvent.target;
    r({variables: { responses: [{inviteId: id, status: value}] }})
    onChange(id, value)
  }

  return (
    <label>
    <input
      type='radio'
      id={`${id}_${value}`}
      name={id}
      value={value}
      checked={checked}
    />
      <div
      style={{'min-width': minWidth}}
      onClick={persistChange}
      className={classnames(styles.checkbox, checked ? styles.checkbox__active : '')
      }>
        <svg
          className={classnames(styles.check, checked ? '' : styles.check__unchecked)}
        // This element is purely decorative so
        // we hide it for screen readers
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none"
        >
          <path
            d="M3 5.8L5 9L10 1"
            strokeWidth="2"
            stroke={checked ? '#fff' : 'none'}
          />
        </svg>
          {children}
      </div>
    </label>
)}

SelectionRow.defaultProps = {
  minWidth: 'initial'
};

export default SelectionRow;
