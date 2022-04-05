import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { useQuery, useMutation } from '@apollo/react-hooks';
import deserializeURLQuery from '../../shared/url/deserializeURLQuery';
import selectTransportation from '../../queries/selectTransportation';
import getTransportations from '../../queries/getTransportations';
import ButtonRow from '../../shared/ButtonRow/ButtonRow';
import styles from '../MealSelection/MealSelection.module.scss';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import Select from '../../shared/Select/Select';
import Button from '../../shared/Button/Button';
import SectionDivider from '../../shared/SectionDivider/SectionDivider';

function Transportation() {
  const { guests, eventId } = deserializeURLQuery();
  const guestIds = () => guests.map(g => `"${g.id}"`);
  const { data, refetch } = useQuery(getTransportations(guestIds(), eventId), { fetchPolicy: 'no-cache' });

  const guestTransportations = () => guests.map((guest) => {
    const transportations = data.transportations.filter(transport => transport.guest.id === guest.id);
    const transportation = transportations[0] || { journeys: [] };
    return {
      guest, eventId, selection: transportation.journeys, options: data.transportationOptions
    };
  });

  const thanksForRSVP = () => {
    window.location.href = '/rsvp/thanks';
  };
  const [select] = useMutation(selectTransportation, { onCompleted: refetch });
  const persistChange = (id, guest, journey, going, s = select) => {
    s({
      variables:
      {
        selection: {
          journey, going, guest: { guestId: guest.id }, event: { eventId }
        }
      }
    });
  };

  return (
    <Grid fluid className={styles.MealSelection}>
      <SectionTitle title="Can we offer you a ride?" />
      <Row center="xs">
        { data && guestTransportations(data).map(guestTransport => (
          <Col xs={12} md={4} key={guestTransport.guest.id}>
            <Row center="xs">
              <span className={styles.MealSelection__guestName}>{guestTransport.guest.displayName}</span>
            </Row>
            <Select {...{ ...guestTransport, role: 'checkbox', onChange: persistChange }} />
          </Col>
        ))}
      </Row>
      <Row center="xs">
        <SectionDivider />
      </Row>
      <Row center="xs">
        <ButtonRow>
          <Button text="Go Back" onClick={() => window.history.back()} />
          <Button text="Continue" onClick={thanksForRSVP} />
        </ButtonRow>
      </Row>
    </Grid>
  );
}

export default Transportation;
