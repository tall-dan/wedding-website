import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Col } from 'react-flexbox-grid';
import deserializeURLQuery from '../../shared/url/deserializeURLQuery';
import styles from './RespondToInvites.module.scss';
import InvitesContainer from './InvitesContainer/InvitesContainer';

function MarkAttendance() {
  const guest_ids = () => (deserializeURLQuery().guest_ids);

  const query = gql`
      {
        invites(guestIds: [${guest_ids()}], orderBy: ["priority"]) {
          id
          status
          guest {
            displayName
            id
          }
          event {
            name
          }
        }
      }
    `;
  // TODO: rearchitect this to accomodate for the idea of rsvp'ing to different events
  // user submits name - > gets their party -> selects who's rsvping -> rsvps for rehearsal dinner (if invited) -> rsvps for wedding
  // -> picks reception dinner
  // submitting who is rsvping should bring back invites for that guest
  //   maybe we force order on what you rsvp to (night before -> rehearsal dinner -> wedding)
  //   and maybe keep a serialized object of what whos is responding to what in the url
  //   { guest_id: [invite_1_id, invite_2_id, invite_3_id], guest_id_2: [invite_1_id, invite_2_id, invite_3_id] }
  //   the first item in the list is what you're responding to
  //   and would get whittled down as you complete your rsvps

  // on this page, group invites by event and then by guest
  // keep state in this component, iterating through events (this component is really just a means to convey invite choices to the user)
  // submitting a selection fires off a query, updating the event that we're RSVPing to
  //
  // The backend doesn't need to provide options to the front end - no need for validation, for the first pass, since we're not
  // normalizing options anyway.
  // Remember to add in a dietary restrictions option for any food selection

  const { loading, error, data } = useQuery(query);

  const invites = data => data.invites.reduce((events, invite) => {
    events[invite.event.name] = events[invite.event.name] || [];
    events[invite.event.name].push(invite);
    return events;
  }, Object.create(null));

  return (
    <div>
      { data && <InvitesContainer invites={invites(data)} /> }
    </div>
  );
}

export default MarkAttendance;
