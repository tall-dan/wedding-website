import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import respondToInvites from '../../../../queries/respondToInvites'

const SelectionRow = ({id, value, checked, onChange}) => {
  const [respond] = useMutation(respondToInvites);

  const persistChange = (changeEvent, r = respond) => {
    const selection = changeEvent.target;
    r({variables: { responses: [{inviteId: selection.name, status: selection.value}] }})
    onChange(selection)
  }

  return (
    <input
      type='radio'
      id={`${id}_${value}`}
      name={id}
      value={value}
      checked={checked}
      onChange={persistChange}
    />
)}

export default SelectionRow;
