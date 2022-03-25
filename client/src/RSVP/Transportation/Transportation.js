import React from 'react';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import deserializeURLQuery from '../../shared/url/deserializeURLQuery';
import gql from 'graphql-tag';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { useQuery } from '@apollo/react-hooks';
import Select from './Select';
import Button from '../../shared/Button/Button';

function Transportation() {
  const { guests, eventId } = deserializeURLQuery()
  const guest_ids = () => {
    return guests.map(g => `"${g.id}"`)
  }

  const query = gql`
      {
        transportations(guestIds: [${guest_ids()}], eventId: "${eventId}") {
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

  const { loading, error, data, refetch } = useQuery(query, {fetchPolicy: "no-cache"});
  const guestTransportations = (data) => guests.map(guest => {
    const transportations = data.transportations.filter(transport => transport.guest.id === guest.id)
    const transportation = transportations[0] || { journeys: [] }
    return {guest, eventId, ...transportation, options: data.transportationOptions}
  })

  const selectTransportation = () => {
     window.location.href = `/rsvp/transportation?guests=${encodeURIComponent(JSON.stringify(guests))}&eventId=${JSON.stringify(eventId)}`
  }

  return (
    <Grid fluid>
      <SectionTitle title="Can we offer you a ride?" />
        <Row center='xs'>
      { data && guestTransportations(data).map ( guestTransport=> (
        <Select {...{...guestTransport, onChange: refetch}} key={guestTransport.guest.id} />
      ))}
        </Row>
        <Button text="Continue" onClick={selectTransportation} />
    </Grid>
  );
}

export default Transportation;
