import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './WeddingPartyMember.module.scss';

class WeddingPartyMember extends Component {
  constructor(props) {
    super(props);

    this.pictureSource = props.name.split(' ')[0].toLowerCase();
    this.id = props.name.replace(' ', '_').toLowerCase();
  }

  render() {
    return (
      <div className={styles.WeddingPartyMember} id={this.id}>
        <div className={styles.WeddingPartyMember__imageContainer}>
          <div
            className={styles.WeddingPartyMember__image}
            style={{ backgroundImage: `url(/${this.pictureSource}.png)` }}
          />
        </div>
        <div className={styles.WeddingPartyMember__contentContainer}>
          <div className={styles.WeddingPartyMember__title}>
            {this.props.name} - {this.props.memberRole}
          </div>
          <div className={styles.WeddingPartyMember__description}><p>{this.props.relation}</p></div>
        </div>
      </div>
    );
  }
}

WeddingPartyMember.propTypes = {
  name: PropTypes.string.isRequired,
  memberRole: PropTypes.string.isRequired,
  relation: PropTypes.string.isRequired
};

export default WeddingPartyMember;
