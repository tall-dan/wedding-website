import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCow, faDove, faLeaf, faTimesCircle, faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import mealSelection from '../../types/mealSelection';
import styles from './Select.module.scss';

const Select = ({
  id, guest, selection, options, role, onChange
}) => {
  const icons = {
    'organic airline chicken breast': faDove,
    'braised beef short ribs': faCow,
    'mushroom risotto': faLeaf,
    'joyfully accepts': faCheckCircle,
    'regretfully declines': faTimesCircle
  };

  const checked = (option) => {
    if (Array.isArray(selection)) {
      return selection.includes(option);
    } return selection === option;
  };

  return (
    <>
      { options.map(option => (
        <Row
          onClick={() => onChange(id, guest, option, !checked(option))}
          className={styles.selectionRow}
          center="xs"
          key={option}
        >
          <Col
            xs={12}
            className={classnames(styles.select__checkbox, checked(option) ? styles.select__checkbox__active : '')}
          >
            <input
              readOnly
              type={role}
              id={`${id}_${option}`}
              name={id}
              value={option}
              checked={checked(option)}
            />
            {icons[option.toLowerCase()]
              && (
              <FontAwesomeIcon
                icon={icons[option.toLowerCase()]}
                className={classnames(styles.select__check, checked(option) ? '' : styles.select__check__unchecked)}
              />
              )
          }
            <label className={styles.option} htmlFor={`${id}_${option}`}>{option} </label>
          </Col>
        </Row>
      ))}
    </>
  );
};

Select.propTypes = {
  ...mealSelection, // TODO: no longer correct
  onChange: PropTypes.func.isRequired
};

export default Select;
