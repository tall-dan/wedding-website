import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './InviteeSelection.module.scss';
import Button from '../../../shared/Button/Button';
import Checkbox from '../../../shared/Checkbox/Checkbox';
import serializeJson from '../../../shared/url/serializeJson';
import SectionDivider from '../../../shared/SectionDivider/SectionDivider';
import guestType from '../../../types/guest';

class InviteeSelection extends Component {
  constructor(props) {
    super(props);
    this.state = { guest_ids: props.guests.map(g => g.id) };
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

  render() {
    const { guests } = this.props;
    return (
      <Grid fluid>
        <Row center="xs">
          <Col xs={12} sm={6} smOffset={3}>
            <h2> Select guests that are RSVPing: </h2>
            <form className={styles.InviteeSelection} onSubmit={this.onSubmit}>
              { guests.map((guest, index) => (
                <div key={guest.id} className={styles.guest_row}>
                  <Checkbox defaultChecked value={guest.id} id={guest.id} onChange={this.onChange} tabIndex={index}>
                    <label className={styles.InviteeSelection__guest_name}> { guest.displayName }  </label>
                  </Checkbox>

                  <input defaultChecked value={guest.id} id={guest.id} onChange={this.onChange} type="checkbox" />
                </div>
              )) }
              <Col xs={12}>
                <Row center="xs">
                  <SectionDivider />
                </Row>
              </Col>
              <div className={styles.buttonRow}>
                <Button text="Search Again" onClick={this.onSearch} />
                <Button text="Continue" onClick={this.onSubmit} />
              </div>
            </form>
          </Col>
          <Col xs />
        </Row>
      </Grid>
    );
  }
}

InviteeSelection.propTypes = {
  guests: PropTypes.arrayOf(guestType).isRequired
};

export default InviteeSelection;
