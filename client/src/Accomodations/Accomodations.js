import React from 'react';
import { Grid, Col } from 'react-flexbox-grid';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import Button from '../shared/Button/Button';
import styles from './Accomodations.module.scss';

const Accomodations = () => (
  <Grid fluid>
    <Col sm={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
      <SectionTitle title="Accomodations" />
      <div className={styles.Accomodations}>
        <div className={styles.Accomodation__item}>
          <div className={styles.Accomodation__title}>Chicago Marriott Southwest at Burr Ridge</div>
          <div className={styles.Accomodation__address}>1200 Burr Ridge Pkwy, Burr Ridge, IL 60527<br />(630) 986-4100
            <br />
          </div>
          <div className={styles.Accomodation__description}>
            <p>
              We currently have a McLaughlin/Schepers room block for the out-of-town wedding guests.
              Rooms range from $139 - $169.
              The last day to reserve a room is Friday, May 15th
            </p>
          </div>
          <div className={styles.Accomodation__button__container}>
            <a href="https://www.marriott.com/hotels/travel/chisw-chicago-marriott-southwest-at-burr-ridge/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2">
              <Button text="Book a Room" />
            </a>
          </div>
        </div>
      </div>
    </Col>
  </Grid>
);
export default Accomodations;
