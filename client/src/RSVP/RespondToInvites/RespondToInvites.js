import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import deserializeURLQuery from '../../shared/url/deserializeURLQuery';
// import styles from './RespondToInvites.module.scss';
import InvitesContainer from './InvitesContainer/InvitesContainer';

function RespondToInvites() {
  const guestIds = () => (deserializeURLQuery().guestIds).map(id => `"${id}"`).join(',');

  const query = gql`
      {
        invites(guestIds: [${guestIds()}], orderBy: ["priority"]) {
          id
          status
          guest {
            displayName
            id
          }
          event {
            id
            name
          }
        }
      }
    `;

  const { data } = useQuery(query);

  const invites = () => data.invites.reduce((events, invite) => {
    events[invite.event.name] = events[invite.event.name] || []; // eslint-disable-line no-param-reassign
    events[invite.event.name].push(invite);
    return events;
  }, Object.create(null));

  return (
    <div>
      { data && <InvitesContainer invites={invites()} /> }
    </div>
  );
}

export default RespondToInvites;
