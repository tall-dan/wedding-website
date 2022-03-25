import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './InviteeSelection.module.scss';
import buttonStyle from '../../../shared/Button/Button.module.scss';
import serializeJson from '../../../shared/url/serializeJson';
import guestType from '../../../types/guest';

class InviteeSelection extends Component {
  constructor(props) {
    super(props);
    this.state = { guest_ids: props.guests.map(g => g.id) };
  }

  onSubmit= (event) => {
    event.preventDefault();
    window.location.href = `/rsvp/respondToInvites?${serializeJson({ guest_ids: this.state.guest_ids })}`;
  }

  onChange = (event) => {
    if (event.target.checked) {
      this.setState(prevState => ({ guest_ids: prevState.guest_ids.concat(event.target.value) }));
    } else {
      this.setState(prevState => ({ guest_ids: prevState.guest_ids.filter(g => g !== event.target.value) }));
    }
  }

  render() {
    const { guests } = this.props;
    return (
      <form className={styles.InviteeSelection} onSubmit={this.onSubmit}>
        <h2> Select guests that are RSVPing: </h2>
        { guests.map(guest => (
          <div key={guest.id} className={styles.guest_row}>
            <label className={styles.InviteeSelection__guest_name}> { guest.displayName }  </label>
            <input defaultChecked value={guest.id} id={guest.id} onChange={this.onChange} type="checkbox" />
          </div>
        )) }
        <input className={buttonStyle.button} type="submit" />
      </form>
    );
  }
}

InviteeSelection.propTypes = {
  guests: PropTypes.arrayOf(guestType).isRequired
};

export default InviteeSelection;
