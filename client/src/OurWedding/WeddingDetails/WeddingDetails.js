import React from 'react';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import styles from './WeddingDetails.module.scss';
import { ceremonyStart, receptionStart, receptionEnd } from '../../constants';

const WeddingDetails = () => (
  <div className={styles.WeddingDetails}>
    <SectionTitle title="Our Wedding" />
    <div className={styles.WeddingDetails__detail}>{ceremonyStart.format('dddd, MMMM Do YYYY')}</div>
    <div className={styles.WeddingDetails__detail}>{ceremonyStart.format('h:mm a')}</div>
    <div className={styles.WeddingDetails__rsvpContainer}>
      <button type="button" className={styles.WeddingDetails__rsvp}>rsvp</button>
    </div>
    <div className={styles.WeddingDetails__sectionDivider} />
    <div className={styles.WeddingDetails__itemTitle}>Ceremony</div>
    <div className={styles.WeddingDetails__venue}>St. Patrick&apos;s Church</div>
    <div className={styles.WeddingDetails__address}>212 Meredith Street  Kennett Square, PA </div>
    <div className={styles.WeddingDetails__sectionDivider} />
    <div className={styles.WeddingDetails__itemTitle}>Reception</div>
    <div className={styles.WeddingDetails__venue}>La Grange County Club</div>
    <div className={styles.WeddingDetails__address}>620 S Brainard Ave, La Grange, IL</div>
    <div className={styles.WeddingDetails__sectionDivider} />
    <div className={styles.WeddingDetails__eventDescription}>
      <p>
          TODO - fill this in with real info
          The ceremony is at {ceremonyStart.format('h:mm A')} and the reception is from {receptionStart.format('h:mm')}
- {receptionEnd.format('h:mm A')}.
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
