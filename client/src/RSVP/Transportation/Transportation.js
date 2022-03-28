import React from 'react';
import gql from 'graphql-tag';
import { Grid, Row } from 'react-flexbox-grid';
import { useQuery } from '@apollo/react-hooks';
import deserializeURLQuery from '../../shared/url/deserializeURLQuery';
import serializeJson from '../../shared/url/serializeJson';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import Select from './Select';
import Button from '../../shared/Button/Button';

function Transportation() {
  const { guests, eventId } = deserializeURLQuery();
  const guestIds = () => guests.map(g => `"${g.id}"`);

  const query = gql`
      {
        transportations(guestIds: [${guestIds()}], eventId: "${eventId}") {
          journeys
          event {
            id
          }
          guest {
            displayName
            id
          }
        }
        transportationOptions(eventId: "${eventId}")
     }
     `;

  const { data, refetch } = useQuery(query, { fetchPolicy: 'no-cache' });

  const guestTransportations = () => guests.map((guest) => {
    const transportations = data.transportations.filter(transport => transport.guest.id === guest.id);
    const transportation = transportations[0] || { journeys: [] };
    return {
      guest, eventId, ...transportation, options: data.transportationOptions
    };
  });

  const selectTransportation = () => {
    window.location.href = `/rsvp/transportation?${serializeJson({ guests, eventId })}`;
  };

  return (
    <Grid fluid>
      <SectionTitle title="Can we offer you a ride?" />
      <Row center="xs">
        { data && guestTransportations(data).map(guestTransport => (
          <Select {...{ ...guestTransport, onChange: refetch }} key={guestTransport.guest.id} />
        ))}
      </Row>
      <Button text="Continue" onClick={selectTransportation} />
    </Grid>
  );
}

export default Transportation;
