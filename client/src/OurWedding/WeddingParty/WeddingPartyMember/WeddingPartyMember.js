import React, { Component } from 'react';
import styles from './WeddingPartyMember.module.scss';

class WeddingPartyMember extends Component {
  render() {
    return (
      <div className={styles.WeddingPartyMember}>
        <div className={styles.WeddingPartyMember__imageContainer}>
          <div className={styles.WeddingPartyMember__image} style={{ backgroundImage: 'url(/dan_and_spencer.png)' }}> </div>
        </div>
        <div className={styles.WeddingPartyMember__contentContainer}>
          <div className={styles.WeddingPartyMember__title}>
            {this.props.name}
            {' '}
-
            {' '}
            {this.props.role}
          </div>
          <div className={styles.WeddingPartyMember__description}><p>{this.props.relation}</p></div>
        </div>
      </div>
    );
  }
}

export default WeddingPartyMember;
