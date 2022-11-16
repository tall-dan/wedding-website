import React from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import { Row, Col } from 'react-flexbox-grid';
import selectTransportation from '../../queries/selectTransportation';
import transportation from '../../types/transportation';

function Select({
  id, eventId, guest, journeys, options, onChange
}) {
  const [select] = useMutation(selectTransportation, { onCompleted: onChange });

  const persistChange = (changeEvent, s = select) => {
    const selection = changeEvent.target;
    s({
      variables:
      {
        selection: {
          journey: selection.value, going: selection.checked, guest: { guestId: guest.id }, event: { eventId }
        }
      }
    });
  };

  return (
    <Col xs={12} md={2}>
      <h2>{guest.displayName}</h2>
      { options.map((option) => (
        <Row center="xs" key={option}>
          <label>{option}</label>
          <input
            type="checkbox"
            id={`${id}_${option}`}
            name={id}
            value={option}
            checked={journeys.includes(option)}
            onChange={persistChange}
          />
        </Row>
      ))}
    </Col>
  );
}

Select.propTypes = {
  ...transportation,
  onChange: PropTypes.func.isRequired
};
export default Select;
