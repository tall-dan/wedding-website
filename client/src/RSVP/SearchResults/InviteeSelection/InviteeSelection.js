import React from 'react';
import styles from './InviteeSelection.module.scss'

const InviteeSelection = ({guests}) => (
  <form method='GET' action='/rsvp/respondToInvites' className={styles.guestSelection}>
		<span> Select guests that are RSVPing: </span>
    { guests.map(guest => (
      <div key={guest.id} className={styles.guest_row}>
        <label> { guest.firstName } { guest.lastName }  </label>
        <input defaultChecked name='guest_ids[]' value={guest.id} id={guest.id} type='checkbox'  />
      </div>
    )) }
    <input type='submit' className={styles.guest_submission} />
  </form>
)

export default InviteeSelection;
