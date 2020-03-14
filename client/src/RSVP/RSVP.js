import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import styles from './RSVP.module.scss';
import Lookup from './Lookup/Lookup';

const RSVP = () => (
  <Grid fluid>
    <Col sm={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
      <SectionTitle title="Can't Wait To See You There" />
      <div className={styles.RSVP}>
        <h2>Please RSVP by May 15th</h2>
        <div className={styles.RSVP_details}>
          <p>
            You'll be able to RSVP for yourself and your party here
          </p>
          <form action="/rsvp">
            <Row center="xs">
              <input className={styles.RSVP_search_input} type="text" name="full_name" placeholder="Ex: Chazz Reinhold (Not Dr. Reinhold or The Chazz Family)"/>
            </Row>
            <Button text="Find Your Invites" />
          </form>
        </div>
      </div>
    </Col>
  </Grid>
);

export default RSVP;
