import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Grid, Row, Col } from 'react-flexbox-grid';
import selectMeal from '../../queries/selectMeal'

const Select = ({id, event, guest, selection, options, onChange}) => {
  const [select, { data }] = useMutation(selectMeal, {onCompleted: onChange});

  const persistChange = (changeEvent, s = select) => {
    const selection = changeEvent.target;
    s({variables:
      { selections: [{id, selection: selection.value, guest:  {guestId: guest.id} , event: {eventId: event.id }} ]}
    })
    }

  return (
    <Col xs={12} md={2}>
      <h2>{guest.displayName}</h2>
      { options.map (option =>  (
        <Row center='xs' key={option}>
          <label>{option}</label>
          <input
          type='radio'
          id={`${id}_${option}`}
          name={id}
          value={option}
          checked={selection === option}
          onChange={persistChange}
        />
        </Row>
      ))}
    </Col>
  )}

export default Select;

/*
          <Col xs={12} md={2} key={selection.guest.id}>
            <h2>{selection.guest.displayName}</h2>
            <Col xs={12}> <span> Joyfully Accepts </span> </Col>
            <Col xs={12}> <span> Regretfully Declines </span> </Col>
            <Col xs={12}> <span> Regretfully Declines </span> </Col>
          </Col>
          */
