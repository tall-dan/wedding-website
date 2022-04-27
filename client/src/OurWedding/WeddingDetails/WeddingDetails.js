import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import styles from './WeddingDetails.module.scss';
import Button from '../../shared/Button/Button';
import Link from '../../shared/Link/Link';
import {
  ceremonyStart, ceremonyEnd, receptionStart, receptionEnd, afterPartyStart, afterPartyEnd
} from '../../constants';

const WeddingDetails = () => (
  <Col sm={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
    <div className={styles.WeddingDetails}>
      <SectionTitle title="Our Vow Renewal" />
      <div className={styles.WeddingDetails__detail}>{ceremonyStart.format('MMMM D, YYYY')}</div>
      <div className={styles.WeddingDetails__detail}>{ceremonyStart.format('h:mm a')}</div>
      <div className={styles.WeddingDetails__rsvpContainer} style={{ display: 'none' }}>
        <Button text="rsvp" />
      </div>
      <div className={styles.WeddingDetails__sectionDivider} />
      <div className={styles.WeddingDetails__itemTitle}>Ceremony</div>
      <div className={styles.WeddingDetails__time}>
        <span>{ceremonyStart.format('h:mm A')} - {ceremonyEnd.format('h:mm A')}</span>
      </div>
      <div className={styles.WeddingDetails__venue}>
        <Link href="https://www.wscongo.org/">First Congregational Church of Western Springs</Link>
      </div>
      <div className={styles.WeddingDetails__address}>
        <Link href="https://goo.gl/maps/KV9n8cdopbCrdL5p9">1106 Chestnut St, Western Springs, IL</Link>
      </div>
      <div className={styles.WeddingDetails__sectionDivider} />
      <div className={styles.WeddingDetails__itemTitle}>Reception</div>
      <div className={styles.WeddingDetails__time}>
        <span>{receptionStart.format('h:mm A')} - {receptionEnd.format('h:mm A')}</span>
      </div>
      <div className={styles.WeddingDetails__venue}>
        <Link href="https://www.lagrangecc.org/">La Grange Country Club</Link>
      </div>
      <div className={styles.WeddingDetails__address}>
        <Link href="https://goo.gl/maps/ALFdNukbcGUr5Jb28">620 S Brainard Ave, La Grange, IL</Link>
      </div>
      <div className={styles.WeddingDetails__sectionDivider} />
      <div className={styles.WeddingDetails__itemTitle}>After Party</div>
      <div className={styles.WeddingDetails__time}>
        <span>{afterPartyStart.format('h:mm A')} - {afterPartyEnd.format('h:mm A')}</span>
      </div>
      <div className={styles.WeddingDetails__venue}>
        <Link href="https://www.lagrangecc.org/">La Grange Country Club Lounge</Link>
      </div>
      <div className={styles.WeddingDetails__address}>
        <Link href="https://goo.gl/maps/ALFdNukbcGUr5Jb28">620 S Brainard Ave, La Grange, IL</Link>
      </div>
      <div className={styles.WeddingDetails__sectionDivider} />
      <div className={styles.WeddingDetails__itemTitle}>Transportation</div>
      <Grid fluid>
        <Row center="xs">
          <div className={styles.WeddingDetails__eventDescription}>
            <p>
              Shuttle buses will be provided:
            </p>
            <ul>
              <li>From the hotel to the ceremony</li>
              <li>From the ceremony to the reception</li>
              <li>From the reception to the hotel</li>
            </ul>
          </div>
        </Row>
      </Grid>
    </div>
  </Col>
);

export default WeddingDetails;
