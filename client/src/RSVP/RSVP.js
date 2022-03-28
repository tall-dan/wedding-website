import React from 'react';
import { Grid, Col } from 'react-flexbox-grid';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import styles from './RSVP.module.scss';
import Lookup from './Lookup/Lookup';

const RSVP = () => (
  <Grid fluid>
    <Col sm={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
      <SectionTitle title="Can&apos;t Wait To See You There" />
      <div className={styles.RSVP}>
        <h2>Please RSVP by May 15th</h2>
        <div className={styles.RSVP_details}>
          <p>
            You&apos;ll be able to RSVP for yourself and your party here
          </p>
          <Lookup prompt="You&apos;ll be able to RSVP for yourself and your party here" />
        </div>
      </div>
    </Col>
  </Grid>
);

export default RSVP;
