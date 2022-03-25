import React from 'react';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import deserializeURLQuery from '../../shared/url/deserializeURLQuery';
import gql from 'graphql-tag';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { useQuery } from '@apollo/react-hooks';
import Select from './Select';
import Button from '../../shared/Button/Button';

function MealSelection() {
  const { guests, eventId } = deserializeURLQuery()
  const guest_ids = () => {
    return guests.map(g => `"${g.id}"`)
  }

  const query = gql`
      {
        mealSelections(guestIds: [${guest_ids()}], eventId: "${eventId}") {
          id
          event {
            id
          }
          guest {
            displayName
            id
          }
          selection
          options
        }
      }
    `;

  // id can come back null for meal selections, which messes up cache
  const { loading, error, data, refetch } = useQuery(query, {fetchPolicy: "no-cache"});

  /*
   * meal selections will come back for every guest
   * if they have made a selection, its id and selection will be populated
   * if not, empty. But guest info + event is always present
   */

  const selectTransportation = () => {
     window.location.href = `/rsvp/transportation?guests=${encodeURIComponent(JSON.stringify(guests))}&eventId=${JSON.stringify(eventId)}`
  }

  return (
    <Grid fluid>
      <SectionTitle title="What would you like to eat?" />
        <Row center='xs'>
      { data && data.mealSelections.map (selection=> (
        <Select {...{...selection, onChange: refetch}} key={selection.guest.id} />
      ))}
        </Row>
        <Button text="Continue" onClick={selectTransportation} />
    </Grid>
  );
}

export default MealSelection;
