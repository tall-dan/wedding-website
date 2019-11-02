import React from 'react';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import styles from './WeddingDetails.module.scss';
import Button from '../../shared/Button/Button';
import { ceremonyStart, receptionStart, receptionEnd } from '../../constants';

const WeddingDetails = () => (
  <div className={styles.WeddingDetails}>
    <SectionTitle title="Our Wedding" />
    <div className={styles.WeddingDetails__detail}>{ceremonyStart.format('dddd, MMMM Do YYYY')}</div>
    <div className={styles.WeddingDetails__detail}>{ceremonyStart.format('h:mm a')}</div>
    <div className={styles.WeddingDetails__rsvpContainer}>
      <Button text="rsvp" />
    </div>
    <div className={styles.WeddingDetails__sectionDivider} />
    <div className={styles.WeddingDetails__itemTitle}>Ceremony</div>
    <div className={styles.WeddingDetails__venue}>First United Methodist Church of LaGrange</div>
    <div className={styles.WeddingDetails__address}>100 W Cossitt Ave, LaGrange, IL</div>
    <div className={styles.WeddingDetails__sectionDivider} />
    <div className={styles.WeddingDetails__itemTitle}>Reception</div>
    <div className={styles.WeddingDetails__venue}>LaGrange County Club</div>
    <div className={styles.WeddingDetails__address}>620 S Brainard Ave, LaGrange, IL</div>
    <div className={styles.WeddingDetails__sectionDivider} />
    <div className={styles.WeddingDetails__eventDescription}>
      <p>
          The ceremony is at {ceremonyStart.format('h:mm A')} and the reception is from {receptionStart.format('h:mm')}
- {receptionEnd.format('h:mm A')}.
  TODO - need real info here
          If you are not checking into a hotel between the ceremony and reception,
            there is a restaurant with an outdoor lounge area at Mendenhall Inn that will be open.
      </p>
      <p>
          After the reception ends, the on-site restaurant/lounge will be open for an after party. If you are not
          staying at the on-site hotel, shuttle services will be provided to the Hilton and Fairfield Inn hotels
        until 12am.
      </p>
    </div>
  </div>
);

export default WeddingDetails;
