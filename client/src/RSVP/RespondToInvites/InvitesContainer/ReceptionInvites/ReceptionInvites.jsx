import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '../../../../shared/Button/Button';
import SectionTitle from '../../../../shared/SectionTitle/SectionTitle';
import styles from './ReceptionInvites.module.scss'
import SelectionRow from './SelectionRow'

class ReceptionInvites extends Component {
  constructor(props) {
    super(props);
    this.state = props.invites.reduce(function (responses, invite) {
      responses[invite.id] = invite.status;
      return responses;
    }, Object.create(null));
  }

  handleOptionChange = (selection) => {
    this.setState(prevState => {
      return {...prevState, [selection.name]: selection.value }
    })
  }

  render = () => {
    return(
        <Grid fluid>
          <SectionTitle title="Can't Wait To See You There" />
          <Row center='xs'>
          <h2>Reception</h2>
            <Col xs={12}>
            <Row>
              <Col mdOffset={3} md={2} xs={4}/>
              <Col sm={2} xs={4}> <span> Joyfully Accepts </span> </Col>
              <Col sm={3} md={2} xs={4}> <span> Regretfully Declines </span> </Col>
            </Row>
            {this.props.invites.map(invite => (
                <Row>
                  <Col className={styles.InviteeResponse__guest_name} mdOffset={3} md={2} xs={4} style={{"textAlign": 'right'}}> <span>{invite.guest.displayName}</span> </Col>
                  <Col sm={2} xs={4}>
                    < SelectionRow
                      id={invite.id}
                      value='accepted'
                      checked={this.state[invite.id] === 'accepted'}
                      onChange={this.handleOptionChange}
                      />
                  </Col>
                  <Col sm={3} md={2} xs={4}>
                    < SelectionRow
                      id={invite.id}
                      value='declined'
                      checked={this.state[invite.id] === 'declined'}
                      onChange={this.handleOptionChange}
                      />
                  </Col>
                </Row>
              )
            )}
            </Col>
          </Row>
          <Row center='xs'>
            <Button text="Continue" onClick={() => this.props.saveInvites(this.state)}/>
          </Row>
        </Grid>
    )
  }
}

export default ReceptionInvites;
