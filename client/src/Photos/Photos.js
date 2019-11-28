import React from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Photo from './Photo/Photo';
import styles from './Photos.module.scss';

const Photos = () => (
  <Grid fluid className={styles.Photos}>
    <Col sm={12} md={10} mdOffset={1} lg={8} lgOffset={2} className={styles.Photo__matte}>
      <Row className={styles.row_height_8}>
        <Col xs={6} md={6}>
          <Photo imageURL="photo_gallery/notre_dame.jpg" />
        </Col>
        <Col xs={6} md={6}>
          <Row className={styles.row_height_4}>
            <Col xs={6} md={6}>
              <Photo imageURL="photo_gallery/peter_frampton.jpeg" />
            </Col>
            <Col xs={6} md={6}>
              <Photo imageURL="photo_gallery/candle_pin_bowling.jpg" />
            </Col>
          </Row>
          <Row className={styles.row_height_4}>
            <Col xs={12}>
              <Photo imageURL="photo_gallery/goose_island_corn_maze.jpg" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className={styles.row_height_4}>
        <Col xs={3} md={3}>
          <Photo imageURL="photo_gallery/boston_beach.jpg" />
        </Col>
        <Col xs={3} md={3}>
          <Photo imageURL="photo_gallery/blackhawks.jpg" />
        </Col>
        <Col xs={3} md={3}>
          <Photo imageURL="photo_gallery/sushi_making.jpeg" />
        </Col>
        <Col xs={3} md={3}>
          <Photo imageURL="photo_gallery/ski_trip.jpg" />
        </Col>
      </Row>
    </Col>
  </Grid>
);
export default Photos;
