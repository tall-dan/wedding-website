import React from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import { Row, Col } from 'react-flexbox-grid';
import selectMeal from '../../queries/selectMeal';
import mealSelection from '../../types/mealSelection';

const Select = ({
  id, event, guest, selection, options, onChange
}) => {
  const [select] = useMutation(selectMeal, { onCompleted: onChange });

  const persistChange = (changeEvent, s = select) => {
    const selectionOption = changeEvent.target;
    s({
      variables:
      {
        selections: [{
          id, selection: selectionOption.value, guest: { guestId: guest.id }, event: { eventId: event.id }
        }]
      }
    });
  };

  return (
    <Col xs={12} md={2}>
      <h2>{guest.displayName}</h2>
      { options.map(option => (
        <Row center="xs" key={option}>
          <label htmlFor={`${id}_${option}`}>{option} </label>
          <input
            type="radio"
            id={`${id}_${option}`}
            name={id}
            value={option}
            checked={selection === option}
            onChange={persistChange}
          />
        </Row>
      ))}
    </Col>
  );
};

Select.propTypes = {
  ...mealSelection,
  onChange: PropTypes.func.isRequired
};

export default Select;

/*
          <Col xs={12} md={2} key={selection.guest.id}>
            <h2>{selection.guest.displayName}</h2>
            <Col xs={12}> <span> Joyfully Accepts </span> </Col>
            <Col xs={12}> <span> Regretfully Declines </span> </Col>
            <Col xs={12}> <span> Regretfully Declines </span> </Col>
          </Col>
          */
