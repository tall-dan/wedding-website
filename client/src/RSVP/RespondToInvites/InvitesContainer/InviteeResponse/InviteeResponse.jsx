import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '../../../../shared/Button/Button';
import SectionTitle from '../../../../shared/SectionTitle/SectionTitle';
import SectionDivider from '../../../../shared/SectionDivider/SectionDivider';
import ButtonRow from '../../../../shared/ButtonRow/ButtonRow';
import styles from './InviteeResponse.module.scss'
import nameStyles from '../../../MealSelection/MealSelection.module.scss'
import SelectWrapper from './SelectWrapper'

class InviteeResponse extends Component {
  constructor(props) {
    super(props);
    this.state = this.stateFromProps(props)
  }

  componentWillReceiveProps(newProps) {
    this.setState(prevState => ({...prevState, ...this.stateFromProps(newProps)}))
  }

  stateFromProps = (props) => {
    const rsvps = props.invites.reduce(function (responses, invite) {
      responses[invite.id] = invite.status;
      return responses;
    }, Object.create(null));
    const disabled = this.isDisabled(rsvps)
    return { rsvps, disabled }
  }

  handleOptionChange = (id, status) => {
    this.setState(prevState => {
      const rsvps = { ...prevState.rsvps, [id]: status }
      const disabled = this.isDisabled(rsvps)

      return {...prevState, rsvps, disabled }
    })
  }

  isDisabled = (rsvps) => Object.values(rsvps).some(status =>
    status === 'pending'
  )

  handleSubmit = () => {
    this.props.saveInvites(this.state.rsvps)
  }

  render = () =>(
    <Grid fluid className={styles.InviteeResponse}>
      <SectionTitle title="Can't Wait To See You There" />
      <Row center='xs'>
        <h2>{this.props.eventName}</h2>
      </Row>
      <Row center='xs'>
        {this.props.invites.map(invite => (
          <Col xs={12} md={4} key={invite.id}>
            <Row center="xs">
              <span className={nameStyles.MealSelection__guestName}>{invite.guest.displayName}</span>
            </Row>
            <SelectWrapper
            invite={invite}
            selection={this.state.rsvps[invite.id]}
            onChange={this.handleOptionChange}
          />
            </Col>
        ))}
          </Row>
          <Row center='xs'>
            <SectionDivider />
          </Row>
          <Row center='xs'>
            <ButtonRow>
              <Button text="Go Back" onClick={() => window.history.back()} />
              <Button text="Continue" onClick={this.handleSubmit} disabled={this.state.disabled}/>
            </ButtonRow>
          </Row>
        </Grid>
  )
}

export default InviteeResponse;
