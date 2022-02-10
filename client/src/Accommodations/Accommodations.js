import React from 'react';
import { Grid, Col } from 'react-flexbox-grid';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import Button from '../shared/Button/Button';
import styles from './Accommodations.module.scss';
import { copy } from './copy';

const Accommodations = () => (
  <Grid fluid>
    <Col sm={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
      <SectionTitle title="Accommodations" />
      <div className={styles.Accommodations}>
        <span className={styles.subtitle}>
          Please make your reservations by Friday, May 27th
        </span>
        { ['marriott', 'hampton'].map((name) => {
          const hotel = copy[name];
          return (
            <div className={styles.Accommodation__item} key={name}>
              <div className={styles.Accommodation__title}>{hotel.title}</div>
              <div
                className={styles.Accommodation__image_container}
              />
              <img alt={name} title={name} src={`/accommodations/${name}.jpg`} />
              <div className={styles.Accommodation__address}>{hotel.address}<br />{hotel.phone_number}
                <br />
              </div>
              <div className={styles.Accommodation__description}>
                <p>
                  {hotel.description}
                </p>
              </div>
              <div className={styles.Accommodation__button__container}>
                <a href={hotel.url}>
                  <Button text="Book a Room" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Col>
  </Grid>
);
export default Accommodations;
