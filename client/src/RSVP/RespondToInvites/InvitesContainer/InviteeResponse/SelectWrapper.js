import React from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import respondToInvites from '../../../../queries/respondToInvites';
import Select from '../../../../shared/Select/Select';
import inviteType from '../../../../types/invite';

function SelectWrapper({ invite, selection, onChange }) {
  const [respond] = useMutation(respondToInvites);

  const options = { accepted: 'Vaccinated* and Accepts', declined: 'Regretfully Declines' };
  const prettySelection = options[selection];

  const persistChange = (id, guest, option, checked) => {
    if (!checked) { return; } // effectively means someone's clicking an option that's already selected

    const status = Object.keys(options).find((k) => options[k] === option);
    respond({ variables: { responses: [{ inviteId: id, status }] } });
    onChange(id, status);
  };

  return (
    <Select
      id={invite.id}
      guest={invite.guest}
      selection={prettySelection}
      options={Object.values(options)}
      role="radio"
      onChange={persistChange}
    />
  );
}

SelectWrapper.propTypes = {
  invite: inviteType.isRequired,
  selection: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectWrapper;
