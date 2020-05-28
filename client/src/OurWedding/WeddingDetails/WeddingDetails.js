import React from 'react';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import styles from './WeddingDetails.module.scss';
import Button from '../../shared/Button/Button';
import Link from '../../shared/Link/Link';
import { newCeremonyStart, newReceptionStart, newReceptionEnd } from '../../constants';

const WeddingDetails = () => (
  <div className={styles.WeddingDetails}>
    <SectionTitle title="Our Wedding" />
    <div className={styles.WeddingDetails__detail}>{newCeremonyStart.format('MMMM D, YYYY')}</div>
    <div className={styles.WeddingDetails__detail}>{newCeremonyStart.format('h:mm a')}</div>
    <div className={styles.WeddingDetails__rsvpContainer} style={{ display: 'none' }}>
      <Button text="rsvp" />
    </div>
    <div className={styles.WeddingDetails__sectionDivider} />
    <div className={styles.WeddingDetails__itemTitle}>Ceremony</div>
    <div className={styles.WeddingDetails__venue}>
      <Link href="https://www.fumclg.org/">First United Methodist Church of La Grange</Link>
    </div>
    <div className={styles.WeddingDetails__address}>
      <Link href="https://goo.gl/maps/KV9n8cdopbCrdL5p9">100 W Cossitt Ave, La Grange, IL</Link>
    </div>
    <div className={styles.WeddingDetails__sectionDivider} />
    <div className={styles.WeddingDetails__itemTitle}>Reception</div>
    <div className={styles.WeddingDetails__venue}>
      <Link href="https://www.lagrangecc.org/">La Grange Country Club</Link>
    </div>
    <div className={styles.WeddingDetails__address}>
      <Link href="https://goo.gl/maps/ALFdNukbcGUr5Jb28">620 S Brainard Ave, La Grange, IL</Link>
    </div>
    <div className={styles.WeddingDetails__sectionDivider} />
    <div className={styles.WeddingDetails__eventDescription}>
      <p>
        The ceremony is at {newCeremonyStart.format('h:mm A')} and the reception is from {newReceptionStart.format('h:mm')}
        - {newReceptionEnd.format('h:mm A')}.
        Shuttle buses will be provided:
      </p>
      <ul>
        <li>From the hotel to the ceremony</li>
        <li>From the ceremony to the reception</li>
        <li>From the reception to the hotel</li>
      </ul>
      <p>
        After the reception ends, the wedding party will be heading
        to <Link href="https://goo.gl/maps/BDLsR9aZ517gy9Mx9">Kenny&apos;s Irish Pub</Link> to
        continue the celebration.  We encourage everyone to come join us!
      </p>
    </div>
  </div>
);

export default WeddingDetails;
