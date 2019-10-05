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
          There will be shuttle buses to from the reception to the hotel - <em> Time to be determined </em>
      </p>
      <p>
          After the reception ends, the wedding party will be heading to Kenny&apos;s
          Irish Pub to continue the celebration.
          We encourage everyone to come join us!
      </p>
    </div>
  </div>
);
// TODO: Would be nice to put links to places - church, reception, kenny's

export default WeddingDetails;
