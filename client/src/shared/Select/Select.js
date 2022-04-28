import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCow, faDove, faLeaf, faTimesCircle, faCheckCircle, faVanShuttle
} from '@fortawesome/free-solid-svg-icons';
import mealSelection from '../../types/mealSelection';
import styles from './Select.module.scss';

class Select extends Component {
  icons = {
    'organic airline chicken breast': faDove,
    'braised beef short ribs': faCow,
    'mushroom risotto': faLeaf,
    'joyfully accepts': faCheckCircle,
    'regretfully declines': faTimesCircle,
    'from hotel to church': faVanShuttle,
    'from church to reception': faVanShuttle,
    'from reception to hotel': faVanShuttle
  };

  constructor({
    id, guest, selection, options, role, onChange, loading
  }) {
    super({
      id, guest, selection, options, role, onChange, loading
    });
    this.state = { selection };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loading) { return; }
    this.setState(prevState => ({ ...prevState, ...{ selection: newProps.selection } }));
  }

  checked = (option) => {
    if (Array.isArray(this.state.selection)) {
      return this.state.selection.includes(option);
    } return this.state.selection === option;
  };

  handleChange = (option, selected) => {
    let selection;
    if (Array.isArray(this.state.selection)) {
      selection = selected ? this.state.selection.concat(option) : this.state.selection.filter(o => o !== option);
    } else selection = option;
    if (selection === this.state.selection) return;
    this.setState({ selection }, () => {
      this.props.onChange(this.props.id, this.props.guest, option, selected);
    });
  }

  render = () => (
    <>
      { this.props.options.map(option => (
        <Row
          onClick={() => this.handleChange(option, !this.checked(option))}
          className={styles.selectionRow}
          center="xs"
          key={`${this.props.guest.id}_${option}`}
        >
          <Col
            xs={12}
            className={classnames(styles.select__checkbox, this.checked(option) ? styles.select__checkbox__active : '')}
          >
            <input
              readOnly
              type={this.props.role}
              id={`${this.props.id}_${option}`}
              name={this.props.id}
              value={option}
              checked={this.checked(option)}
            />
            {this.icons[option.toLowerCase()]
              && (
              <FontAwesomeIcon
                icon={this.icons[option.toLowerCase()]}
                className={classnames(styles.select__check, this.checked(option) ? '' : styles.select__check__unchecked)}
              />
              )
          }
            <label className={styles.option} htmlFor={`${this.id}_${option}`}>{option} </label>
          </Col>
        </Row>
      ))}
    </>
  );
}

Select.propTypes = {
  ...mealSelection, // TODO: no longer correct
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Select;
