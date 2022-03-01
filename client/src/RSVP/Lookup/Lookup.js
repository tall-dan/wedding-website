import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-flexbox-grid';
import styles from './Lookup.module.scss';
import Button from '../../shared/Button/Button';

class Lookup extends Component {
  constructor(props) {
    super(props);
    this.state = { lookupURL: '/rsvp#' };
  }

  onChange = (event) => {
    this.setState({ lookupURL: `/rsvp/search?name=${encodeURI(event.target.value)}` });
  }

  render() {
    return (
      <div className={styles.Lookup}>
        <p className={styles.Lookup_prompt}>
          { this.props.prompt }
        </p>
        <Row center="xs">
          <input onChange={this.onChange} className={styles.Lookup_search_input} type="text" name="full_name" placeholder="Ex: Jeremy Grey (Not Dr. Grey or The Grey Family)" />
        </Row>
        <a href={this.state.lookupURL}>
          <Button text="Find Your Invites" />
        </a>
      </div>
    );
  }
}

Lookup.propTypes = {
  prompt: PropTypes.string.isRequired
};

export default Lookup;
