import React from 'react';
import { Grid } from 'react-flexbox-grid';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import SectionDivider from '../../shared/SectionDivider/SectionDivider';
import styles from './WeddingParty.module.scss';
import WeddingPartyMember from './WeddingPartyMember/WeddingPartyMember';

const WeddingParty = () => (
  <div className={styles.WeddingParty}>
    <SectionTitle title="The Wedding Party" />
    <Grid fluid className={styles.WeddingParty__container}>
      <div className={styles.WeddingParty__padding_bookend} />
      <div className={styles.WeddingParty__party_column}>
        <WeddingPartyMember
          name="Natalie Spiegel"
          relation="Childhood friend of the Bride"
          memberRole="Maid of Honor"
        />
        <div style={{ marginLeft: '30%' }}>
          <SectionDivider />
        </div>
        <WeddingPartyMember
          name="Katie McLaughlin"
          relation="Sister of the Bride"
          memberRole="Bridesmaid"
        />
        <div style={{ marginLeft: '30%' }}>
          <SectionDivider />
        </div>
        <WeddingPartyMember
          name="Maggie Anderson"
          relation="High School Friend of the Bride"
          memberRole="Bridesmaid"
        />
        <div style={{ marginLeft: '30%' }}>
          <SectionDivider />
        </div>
        <WeddingPartyMember
          name="Kirsten Higgins"
          relation="High School Friend of the Bride"
          memberRole="Bridesmaid"
        />
        <div style={{ marginLeft: '30%' }}>
          <SectionDivider />
        </div>
        <WeddingPartyMember
          name="Amanda Kingman"
          relation="Friend of the Bride"
          memberRole="Bridesmaid"
        />
        <div style={{ marginLeft: '30%' }}>
          <SectionDivider />
        </div>
        <WeddingPartyMember
          name="Dominique Higgins"
          relation="College Friend of the Bride"
          memberRole="Bridesmaid"
        />
        <div style={{ marginLeft: '30%' }}>
          <SectionDivider />
        </div>
        <WeddingPartyMember
          name="Grace Chiarella"
          relation="College Friend of the Bride"
          memberRole="Bridesmaid"
        />
        <div style={{ marginLeft: '30%' }}>
          <SectionDivider />
        </div>
        <WeddingPartyMember
          name="Liz Coffey"
          relation="Sister-in-law of the Bride"
          memberRole="Bridesmaid"
        />
        <div className={styles.hidden_md_up}>
          <div style={{ marginLeft: '30%' }}>
            <SectionDivider />
          </div>
        </div>
      </div>
      <div className={styles.WeddingParty__padding_middle} />
      <div className={styles.WeddingParty__groomsmen_column}>
        <WeddingPartyMember
          name="Andrew Benitez"
          relation="College Friend of the Groom"
          memberRole="Best Man"
        />
        <div style={{ marginLeft: '30%' }}>
          <SectionDivider />
        </div>
        <WeddingPartyMember
          name="Ben Schepers"
          relation="Brother of the Groom"
          memberRole="Groomsman"
        />
        <div style={{ marginLeft: '30%' }}>
          <SectionDivider />
        </div>
        <WeddingPartyMember
          name="Adam Knies"
          relation="Childhood friend of the Groom"
          memberRole="Groomsman"
        />
        <div style={{ marginLeft: '30%' }}>
          <SectionDivider />
        </div>
        <WeddingPartyMember
          name="Nick Thystrup"
          relation="College Friend of the Groom"
          memberRole="Groomsman"
        />
        <div style={{ marginLeft: '30%' }}>
          <SectionDivider />
        </div>
        <WeddingPartyMember
          name="Spencer Johnson"
          relation="College Friend of the Groom"
          memberRole="Groomsman"
        />
        <div style={{ marginLeft: '30%' }}>
          <SectionDivider />
        </div>
        <WeddingPartyMember
          name="Anderson Willis"
          relation="Childhood Friend of the Groom"
          memberRole="Groomsman"
        />
        <div style={{ marginLeft: '30%' }}>
          <SectionDivider />
        </div>
        <WeddingPartyMember
          name="Joe Hedinger"
          relation="Childhood Friend of the Groom"
          memberRole="Groomsman"
        />
        <div style={{ marginLeft: '30%' }}>
          <SectionDivider />
        </div>
        <WeddingPartyMember
          name="Dan McLaughlin"
          relation="Brother of the Bride"
          memberRole="Groomsman"
        />
      </div>
      <div className={styles.WeddingParty__padding_bookend} />
    </Grid>
  </div>
);

export default WeddingParty;
