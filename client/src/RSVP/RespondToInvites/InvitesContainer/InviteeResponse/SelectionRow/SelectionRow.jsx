import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import respondToInvites from '../../../../../queries/respondToInvites'
import styles from './SelectionRow.module.scss';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SelectionRow = ({invite, selection, options, onChange }) => {
  const [respond] = useMutation(respondToInvites);

  const persistChange = (changeEvent, r = respond) => {
    const selection = changeEvent.target;
    r({variables: { responses: [{inviteId: id, status: value}] }})
    onChange(invite.id, selection)
  }

  return (
            <Select
            id={invite.id}
            guest={invite.guest}
            selection={selection}
            options={options}
            role='radio'
            onChange={persistChange}
          />
)}

SelectionRow.defaultProps = {
  fill: false
};

export default SelectionRow;
