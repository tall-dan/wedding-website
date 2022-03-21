import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './InviteeSelection.module.scss';
import buttonStyle from '../../../shared/Button/Button.module.scss';

class InviteeSelection extends Component  {
  constructor(props) {
    super(props);
    this.state = { guest_ids: props.guests.map(g => g.id) };
  }

  onSubmit= (event) => {
    event.preventDefault()
    window.location.href = `/rsvp/respondToInvites?guest_ids=${encodeURIComponent(JSON.stringify(this.state.guest_ids))}`
  }

  onChange = (event) => {
    if (event.target.checked){
      this.setState(prevState => ({ guest_ids: prevState.guest_ids.concat(event.target.value) }));
    } else {
      this.setState(prevState => ({ guest_ids: prevState.guest_ids.filter(g => g !== event.target.value) }));
    }
  }

  render(){
    return (
      <form className={styles.InviteeSelection} onSubmit={this.onSubmit}>
        <h2> Select guests that are RSVPing: </h2>
        { this.props.guests.map(guest => (
          <div key={guest.id} className={styles.guest_row}>
            <label className={styles.InviteeSelection__guest_name}> { guest.displayName }  </label>
            <input defaultChecked value={guest.id} id={guest.id} onChange={this.onChange} type="checkbox" />
          </div>
        )) }
        <input className={buttonStyle.button} type="submit" />
      </form>
  )}
};

InviteeSelection.propTypes = {
  guests: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes. string.isRequired,
    displayName: PropTypes.string.isRequired
  })).isRequired
};

export default InviteeSelection;
