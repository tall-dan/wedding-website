import React from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { useQuery, useMutation } from '@apollo/react-hooks';
import selectMeal from '../../queries/selectMeal';
import getMealSelections from '../../queries/getMealSelections';
import deserializeURLQuery from '../../shared/url/deserializeURLQuery';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import SectionDivider from '../../shared/SectionDivider/SectionDivider';
import ButtonRow from '../../shared/ButtonRow/ButtonRow';
import Select from '../../shared/Select/Select';
import styles from './MealSelection.module.scss';
import Button from '../../shared/Button/Button';

function MealSelection() {
  const { guests, eventId } = deserializeURLQuery();
  const guestIds = () => guests.map(g => `"${g.id}"`);

  // id can come back null for meal selections, which messes up cache
  const {
    data, refetch
  } = useQuery(getMealSelections(guestIds(), eventId), { fetchPolicy: 'no-cache' });

  const [select] = useMutation(selectMeal, { onCompleted: refetch });
  const persistChange = (id, guest, guestSelection, checked, s = select) => {
    if (!checked) { return; } // effectively means someone's clicking an option that's already selected
    s({
      variables:
      {
        selections: [{
          id, selection: guestSelection, guest: { guestId: guest.id }, event: { eventId }
        }]
      }
    });
  };

  const disabled = (!data || data.mealSelections.some(selection => !selection.id));

  const selectTransportation = () => {
    const queryString = `guests=${encodeURIComponent(JSON.stringify(guests))}&eventId=${JSON.stringify(eventId)}`;
    window.location.href = `/rsvp/transportation?${queryString}`;
  };

  /*
   * meal selections will come back for every guest
   * if they have made a selection, its id and selection will be populated
   * if not, empty. But guest info + event is always present
   */
  return (
    <Grid fluid className={styles.MealSelection}>
      <SectionTitle title="What would you like to eat?" />
      <Row center="xs">
        { data && data.mealSelections.map(selection => (
          <Col xs={12} md={4} key={selection.guest.id}>
            <Row center="xs">
              <span className={styles.MealSelection__guestName}>{selection.guest.displayName}</span>
            </Row>
            <Select {...{ ...selection, role: 'radio', onChange: persistChange }} />
          </Col>
        ))}
      </Row>
      <Row center="xs">
        <SectionDivider />
      </Row>
      <Row center="xs">
        <ButtonRow>
          <Button text="Go Back" onClick={() => window.history.back()} />
          <Button text="Continue" onClick={selectTransportation} disabled={disabled} />
        </ButtonRow>
      </Row>
    </Grid>
  );
}

export default MealSelection;
