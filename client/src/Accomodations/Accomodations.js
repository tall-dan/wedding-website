import React from 'react';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import styles from './Accomodations.module.scss';

const Accomodations = () => (
  <>
    <SectionTitle title="Accomodations" />
    <div className={styles.Accomodations}>
      <div className={styles.Accomodation__item}>
        <div className={styles.Accomodation__title}>Chicago Marriott Southwest at Burr Ridge</div>
        <div className={styles.Accomodation__address}>1200 Burr Ridge Pkwy, Burr Ridge, IL 60527<br />(630) 986-4100
          <br />
        </div>
        <div className={styles.Accomodation__description}>
          <p>We currently have a McLaughlin/Schepers room block for the out-of-town wedding guests</p>
        </div>
        <div className={styles.Accomodation__button__container}>
          <a href="https://www.marriott.com/hotels/travel/chisw-chicago-marriott-southwest-at-burr-ridge/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2">
            <button type="button">Book a Room</button>
          </a>
        </div>
      </div>
      <div className={styles.Accomodation__separator} />
      <div className={styles.Accomodation__item}>
        <div className={styles.Accomodation__title}>Chicago Marriott Southwest at Burr Ridge</div>
        <div className={styles.Accomodation__address}>1200 Burr Ridge Pkwy, Burr Ridge, IL 60527<br />(630) 986-4100
          <br />
        </div>
        <div className={styles.Accomodation__description}>
          <p>Room block under Dan Schepers &amp; Eileen McLaughlin </p>
        </div>
        <div className={styles.Accomodation__button__container}>
          <a href="https://www.marriott.com/hotels/travel/chisw-chicago-marriott-southwest-at-burr-ridge/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2">
            <button type="button">Book a Room</button>
          </a>
        </div>
      </div>
    </div>
  </>
);
export default Accomodations;
