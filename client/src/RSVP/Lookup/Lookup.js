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
    const nameJson = JSON.stringify(event.target.value);
    this.setState({ lookupURL: `/rsvp/search?name=${encodeURI(nameJson)}` });
  }

  render() {
    const { prompt } = this.props;
    const { lookupURL } = this.state;
    return (
      <div className={styles.Lookup}>
        <p className={styles.Lookup_prompt}>
          { prompt }
        </p>
        <Row center="xs">
          <input onChange={this.onChange} className={styles.Lookup_search_input} type="text" name="full_name" placeholder="Ex: Jeremy Grey (Not Dr. Grey or The Grey Family)" />
        </Row>
        <Button text="Find Your Invites" target={lookupURL} />
      </div>
    );
  }
}

Lookup.propTypes = {
  prompt: PropTypes.string.isRequired
};

export default Lookup;
