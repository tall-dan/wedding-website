import React from 'react';
import PropTypes from 'prop-types';
import styles from './InviteeSelection.module.scss';
import buttonStyle from '../../../shared/Button/Button.module.scss';

const InviteeSelection = ({ guests }) => (
  <form className={styles.InviteeSelection} method="GET" action="/rsvp/respondToInvites">
    <h2> Select guests that are RSVPing: </h2>
    { guests.map(guest => (
      <div key={guest.id} className={styles.guest_row}>
        <label className={styles.InviteeSelection__guest_name}> { guest.displayName }  </label>
        <input defaultChecked name="guest_ids[]" value={guest.id} id={guest.id} type="checkbox" />
      </div>
    )) }
    <input className={buttonStyle.button} type="submit" />
  </form>
);

InviteeSelection.propTypes = {
  guests: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes. string.isRequired,
    displayName: PropTypes.string.isRequired
  })).isRequired
};

export default InviteeSelection;
