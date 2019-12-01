import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import responsiveStyles from '../../shared/styles/responsiveStyles.module.scss';
import styles from './WeddingParty.module.scss';
import WeddingPartyMember from './WeddingPartyMember/WeddingPartyMember';

const WeddingParty = () => (
  <div className={styles.WeddingParty}>
    <SectionTitle title="The Wedding Party" />
    <Grid fluid className={styles.WeddingParty__container}>
      <Row>
        <Col md={6} sm={12}>
          <WeddingPartyMember
            name="Natalie Spiegel"
            relation="Childhood friend of the Bride"
            memberRole="Maid of Honor"
          />
          <div className={styles.WeddingParty__sectionDivider} />
          <WeddingPartyMember
            name="Katie McLaughlin"
            relation="Sister of the Bride"
            memberRole="Bridesmaid"
          />
          <div className={styles.WeddingParty__sectionDivider} />
          <WeddingPartyMember
            name="Maggie Anderson"
            relation="High School Friend of the Bride"
            memberRole="Bridesmaid"
          />
          <div className={styles.WeddingParty__sectionDivider} />
          <WeddingPartyMember
            name="Kirsten Higgins"
            relation="High School Friend of the Bride"
            memberRole="Bridesmaid"
          />
          <div className={styles.WeddingParty__sectionDivider} />
          <WeddingPartyMember
            name="Amanda Kingman"
            relation="Friend of the Bride"
            memberRole="Bridesmaid"
          />
          <div className={styles.WeddingParty__sectionDivider} />
          <WeddingPartyMember
            name="Dominique Higgins"
            relation="College Friend of the Bride"
            memberRole="Bridesmaid"
          />
          <div className={styles.WeddingParty__sectionDivider} />
          <WeddingPartyMember
            name="Grace Chiarella"
            relation="College Friend of the Bride"
            memberRole="Bridesmaid"
          />
          <div className={styles.WeddingParty__sectionDivider} />
          <WeddingPartyMember
            name="Liz Coffey"
            relation="Sister-in-law of the Bride"
            memberRole="Bridesmaid"
          />
          <div className={[styles.WeddingParty__sectionDivider, responsiveStyles.hidden_md].join(' ')} />
        </Col>
        { /* todo: figure out a divider to display when we collapse to a single column */ }
        <Col md={6} sm={12}>
          <WeddingPartyMember
            name="Adam Knies"
            relation="Childhood friend of the Groom"
            memberRole="Best Man"
          />
          <div className={styles.WeddingParty__sectionDivider} />
          <WeddingPartyMember
            name="Ben Schepers"
            relation="Brother of the Groom"
            memberRole="Groomsman"
          />
          <div className={styles.WeddingParty__sectionDivider} />
          <WeddingPartyMember
            name="Andrew Benitez"
            relation="College Friend of the Groom"
            memberRole="Groomsman"
          />
          <div className={styles.WeddingParty__sectionDivider} />
          <WeddingPartyMember
            name="Nick Thystrup"
            relation="College Friend of the Groom"
            memberRole="Groomsman"
          />
          <div className={styles.WeddingParty__sectionDivider} />
          <WeddingPartyMember
            name="Spencer Johnson"
            relation="College Friend of the Groom"
            memberRole="Groomsman"
          />
          <div className={styles.WeddingParty__sectionDivider} />
          <WeddingPartyMember
            name="Anderson Willis"
            relation="Childhood Friend of the Groom"
            memberRole="Groomsman"
          />
          <div className={styles.WeddingParty__sectionDivider} />
          <WeddingPartyMember
            name="Joe Hedinger"
            relation="Childhood Friend of the Groom"
            memberRole="Groomsman"
          />
          <div className={styles.WeddingParty__sectionDivider} />
          <WeddingPartyMember
            name="Dan McLaughlin"
            relation="Brother of the Bride"
            memberRole="Groomsman"
          />
        </Col>
      </Row>
    </Grid>
  </div>
);

export default WeddingParty;
