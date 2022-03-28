import React from 'react';
import gql from 'graphql-tag';
import { Grid, Row } from 'react-flexbox-grid';
import { useQuery } from '@apollo/react-hooks';
import deserializeURLQuery from '../../shared/url/deserializeURLQuery';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import Select from './Select';
import Button from '../../shared/Button/Button';

function MealSelection() {
  const { guests, eventId } = deserializeURLQuery();
  const guestIds = () => guests.map(g => `"${g.id}"`);

  const query = gql`
      {
        mealSelections(guestIds: [${guestIds()}], eventId: "${eventId}") {
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
  const {
    data, refetch
  } = useQuery(query, { fetchPolicy: 'no-cache' });

  /*
   * meal selections will come back for every guest
   * if they have made a selection, its id and selection will be populated
   * if not, empty. But guest info + event is always present
   */

  const selectTransportation = () => {
    const queryString = `guests=${encodeURIComponent(JSON.stringify(guests))}&eventId=${JSON.stringify(eventId)}`;
    window.location.href = `/rsvp/transportation?${queryString}`;
  };

  return (
    <Grid fluid>
      <SectionTitle title="What would you like to eat?" />
      <Row center="xs">
        { data && data.mealSelections.map(selection => (
          <Select {...{ ...selection, onChange: refetch }} key={selection.guest.id} />
        ))}
      </Row>
      <Button text="Continue" onClick={selectTransportation} />
    </Grid>
  );
}

export default MealSelection;
