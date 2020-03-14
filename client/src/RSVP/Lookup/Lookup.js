import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Lookup.module.scss';
import Button from '../../shared/Button/Button';
import { Row } from 'react-flexbox-grid';

class Lookup extends Component {
  search = () => {
    window.location = `/rsvpSearch?name=${encodeURI(this.state.searchTerm)}`
  }

  onChange = (event) => {
    this.setState({searchTerm: event.target.value});
  }

  render() {
    return(
      <div className={styles.Lookup}>
        <p className={styles.Lookup_prompt}>
          { this.props.prompt }
        </p>
        <Row center="xs">
          <input onChange={this.onChange} className={styles.Lookup_search_input} type="text" name="full_name" placeholder="Ex: Chazz Reinhold (Not Dr. Reinhold or The Chazz Family)"/>
        </Row>
        <Button text="Find Your Invites" onClick={ this.search } />
      </div>
    )
  }
}

Lookup.propTypes = {
  prompt: PropTypes.string.isRequired
};

export default Lookup;
