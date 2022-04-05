import React from 'react';
import gql from 'graphql-tag';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { useQuery } from '@apollo/react-hooks';
import deserializeURLQuery from '../../shared/url/deserializeURLQuery';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import SectionDivider from '../../shared/SectionDivider/SectionDivider';
import ButtonRow from '../../shared/ButtonRow/ButtonRow';
import Select from './Select/Select';
import styles from './MealSelection.module.scss';
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
            name
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
    <Grid fluid className={styles.MealSelection}>
      <SectionTitle title="What would you like to eat?" />
      <Row center="xs">
        { data && data.mealSelections.map(selection => (
          <Col xs={12} md={4} key={selection.guest.id}>
            <Row center="xs">
              <span className={styles.MealSelection__guestName}>{selection.guest.displayName}</span>
            </Row>
            <Select {...{ ...selection, onChange: refetch }} />
          </Col>
        ))}
      </Row>
      <Row center="xs">
        <SectionDivider />
      </Row>
      <Row center="xs">
        <ButtonRow>
          <Button text="Go Back" onClick={() => window.history.back()} />
          <Button text="Continue" onClick={selectTransportation} />
        </ButtonRow>
      </Row>
    </Grid>
  );
}

export default MealSelection;
