import React from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import styles from './Registry.module.scss';

const Registry = () => (
  <Grid fluid>
    <Col sm={12} md={10} mdOffset={1} lg={8} lgOffset={2} className={styles.Matte}>
      <p className={styles.Intro}> This celebration is a little different than a normal wedding -
        mostly because it’s been delayed for two years!
        We’ve made the most of the time; we purchased a house in 2020, and became parents in 2021!
        All this to say, our registry doesn’t look like the typical newlywed registry.
        We will be honeymooning in Greece so, in lieu of a wedding gift, please consider
        donating to our honeymoon registry. We greatly apprciate it!
      </p>
      <div>
        <Row center="xs">
          <a href="https://www.travelersjoy.com/mcschepersmoon">
            <img alt="honeymoon" className={styles.registryImage} src="/greece.jpeg" />
          </a>
        </Row>
      </div>
    </Col>
  </Grid>
);

export default Registry;
