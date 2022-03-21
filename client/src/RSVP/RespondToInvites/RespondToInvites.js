import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Col } from 'react-flexbox-grid';
import deserializeURLQuery from '../../shared/url/deserializeURLQuery';
import styles from './RespondToInvites.module.scss';
import InvitesContainer from './InvitesContainer/InvitesContainer';

function RespondToInvites() {
  const guest_ids = () => (deserializeURLQuery().guest_ids).map(id => `"${id}"`).join(',');

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
            id
            name
          }
        }
      }
    `;

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

export default RespondToInvites;
