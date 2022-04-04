import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '../../../../shared/Button/Button';
import SectionTitle from '../../../../shared/SectionTitle/SectionTitle';
import SectionDivider from '../../../../shared/SectionDivider/SectionDivider';
import responsiveStyles from '../../../../shared/styles/responsiveStyles.module.scss'
import styles from './InviteeResponse.module.scss'
import SelectionRow from './SelectionRow'

class InviteeResponse extends Component {
  constructor(props) {
    super(props);
    this.state = props.invites.reduce(function (responses, invite) {
      responses[invite.id] = invite.status;
      return responses;
    }, Object.create(null));
  }

  handleOptionChange = (id, value) => {
    this.setState(prevState => {
      return {...prevState, [id]: value }
    })
  }

  handleSubmit = () => {
    this.props.saveInvites(this.state)
  }

  render = () => {
    return(
        <Grid fluid>
          <SectionTitle title="Can't Wait To See You There" />
          <Row center='xs'>
          <h2>{this.props.eventName}</h2>
            <Col xs={12}>
            {this.props.invites.map(invite => (
                <Row key={invite.id} center='xs'>
                  <Col className={styles.InviteeResponse__guest_name} lg={3} md={3} xs={12}>
                    <Row end='md' center='xs'>
                      <span>{invite.guest.displayName}</span>
                    </Row>
                  </Col>
                  <Col xl={2} lg={3} md={3} xs={12}>
                    <SelectionRow
                      id={invite.id}
                      value='accepted'
                      checked={this.state[invite.id] === 'accepted'}
                      onChange={this.handleOptionChange}
                  ><span className={styles.action}> Joyfully Accepts </span> </SelectionRow>
                  </Col>
                  <Col lg={3} md={3} xs={12}>
                    <Row start='md' center='xs'>
                    <SelectionRow
                      id={invite.id}
                      value='declined'
                      checked={this.state[invite.id] === 'declined'}
                      onChange={this.handleOptionChange}
                  ><span className={styles.action}> Regretfully Declines </span> </SelectionRow>
                    </Row>
                  </Col>
                  <Col xs={12} className={responsiveStyles.hidden_md_up}>
                    <Row center='xs'>
                      <SectionDivider />
                    </Row>
                  </Col>
                </Row>
              )
            )}
            </Col>
          </Row>
          <Row center='xs'>
            <Col xs={12} className={responsiveStyles.hidden_md_down}>
              <Row center='xs'>
                <SectionDivider />
              </Row>
            </Col>
            <div className={styles.buttonRow}>
            <Button text="Search Again" onClick={this.onSearch} />
            <Button text="Continue" onClick={() => this.props.saveInvites(this.state)}/>
          </div>
          </Row>
        </Grid>
    )
  }
}

export default InviteeResponse;
