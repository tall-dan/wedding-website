import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { groupBy } from 'lodash';
import styles from './InviteeSelection.module.scss';
import Button from '../../../shared/Button/Button';
import Checkbox from '../../../shared/Checkbox/Checkbox';
import ButtonRow from '../../../shared/ButtonRow/ButtonRow';
import serializeJson from '../../../shared/url/serializeJson';
import SectionDivider from '../../../shared/SectionDivider/SectionDivider';
import guestType from '../../../types/guest';

class InviteeSelection extends Component {
  guestsByParty = groupBy(this.props.guests, 'guestPartyId')

  partyCount = Object.keys(this.guestsByParty).length

  columnWidth = Math.floor(12 / this.partyCount)

  constructor(props) {
    super(props);
    const guestIds = this.partyCount === 1 ? props.guests.map(g => g.id) : [];
    this.state = { guest_ids: guestIds };
  }

  onSubmit = (event) => {
    event.preventDefault();
    window.location.href = `/rsvp/respondToInvites?${serializeJson({ guest_ids: this.state.guest_ids })}`;
  }

  onSearch = (event) => {
    event.preventDefault();
    window.location.href = '/rsvp';
  }

  onChange = (checked, guestId) => {
    if (checked) {
      this.setState(prevState => ({ guest_ids: prevState.guest_ids.concat(guestId) }));
    } else {
      this.setState(prevState => ({ guest_ids: prevState.guest_ids.filter(g => g !== guestId) }));
    }
  }

  guestRow = (guest, index, defaultChecked = true) => (
    <div key={guest.id} className={styles.guest_row}>
      <Checkbox
        defaultChecked={defaultChecked}
        value={guest.id}
        id={guest.id}
        onChange={this.onChange}
        tabIndex={index}
      >
        <label className={styles.InviteeSelection__guest_name}> { guest.displayName }  </label>
      </Checkbox>

      <input defaultChecked={defaultChecked} value={guest.id} id={guest.id} onChange={this.onChange} type="checkbox" />
    </div>

  )


  render() {
    let tabIndex = 5;
    return (
      <Grid fluid>
        <Row center="xs">
          <h2> Select guests that are RSVPing: </h2>
        </Row>
        <form className={styles.InviteeSelection} onSubmit={this.onSubmit}>
          <Row center="xs">
            { this.partyCount > 1 && Object.entries(this.guestsByParty).map(([partyId, guests], outerIndex) => (
              <React.Fragment key={partyId}>
                <Col xs={12} md={this.columnWidth - 2}>
                  <Row center="xs" {...{ [outerIndex === 1 ? 'start' : 'end']: 'md' }}>
                    { guests.map(guest => this.guestRow(guest, tabIndex += 1, false))
                    }
                  </Row>
                </Col>
                { outerIndex < this.partyCount - 1 && (
                <Col xs={12} md={2}>
                  <h2> - or - </h2>
                </Col>
                )}
              </React.Fragment>
            ))}
            { this.partyCount === 1 && Object.values(this.guestsByParty)[0].map((guest, index) => (
              <Col xs={12} key={guest.id}>
                { this.guestRow(guest, index) }
              </Col>
            ))}
          </Row>
          <Row center="xs">
            <Col xs={12}>
              <Row center="xs">
                <SectionDivider />
              </Row>
            </Col>
            <Col xs={12}>
              <ButtonRow>
                <Button text="Search Again" onClick={this.onSearch} />
                <Button text="Continue" onClick={this.onSubmit} />
              </ButtonRow>
            </Col>
            <Col xs />
          </Row>
        </form>
      </Grid>
    );
  }
}

InviteeSelection.propTypes = {
  guests: PropTypes.arrayOf(guestType).isRequired
};

export default InviteeSelection;
