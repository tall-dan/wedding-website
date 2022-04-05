import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import respondToInvites from '../../../../../queries/respondToInvites'
import styles from './SelectionRow.module.scss';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SelectionRow = ({id, value, checked, onChange, fill, icon, children}) => {
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
      onClick={persistChange}
      className={classnames(styles.checkbox, checked ? styles.checkbox__active : '', fill ? styles.fill_space : '')
      }>
      <FontAwesomeIcon icon={icon} className={classnames(styles.check, checked ? styles.check__checked : styles.check__unchecked)}/>
          {children}
      </div>
    </label>
)}

SelectionRow.defaultProps = {
  fill: false
};

export default SelectionRow;
