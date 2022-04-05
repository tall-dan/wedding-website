import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import { Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCow, faDrumstickBite, faLeaf } from '@fortawesome/free-solid-svg-icons';
import selectMeal from '../../../queries/selectMeal';
import mealSelection from '../../../types/mealSelection';
import styles from './Select.module.scss';

const Select = ({
  id, event, guest, selection, options, onChange
}) => {
  const [select] = useMutation(selectMeal, { onCompleted: onChange });

  const icons = {
    chicken: faDrumstickBite,
    steak: faCow,
    'vegetarian*': faLeaf
  };
  const persistChange = (guestSelection, s = select) => {
    s({
      variables:
      {
        selections: [{
          id, selection: guestSelection, guest: { guestId: guest.id }, event: { eventId: event.id }
        }]
      }
    });
  };

  return (
    <>
      { options.map((option) => {
        const checked = selection === option;
        return (
          <Row
            onClick={() => persistChange(option)}
            className={styles.selectionRow}
            center="xs"
            key={option}
          >
            <Col
              xs={12}
              className={classnames(styles.select__checkbox, checked ? styles.select__checkbox__active : '')}
            >
              <input
                type="radio"
                id={`${id}_${option}`}
                name={id}
                value={option}
                checked={checked}
              />
              <FontAwesomeIcon
                icon={icons[option.toLowerCase()]}
                className={classnames(styles.select__check, checked ? '' : styles.select__check__unchecked)}
              />
              <label className={styles.option} htmlFor={`${id}_${option}`}>{option} </label>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

Select.propTypes = {
  ...mealSelection,
  onChange: PropTypes.func.isRequired
};

export default Select;
