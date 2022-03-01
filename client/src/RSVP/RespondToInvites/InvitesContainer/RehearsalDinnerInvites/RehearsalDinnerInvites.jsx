import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '../../../../shared/Button/Button';
import SectionTitle from '../../../../shared/SectionTitle/SectionTitle';

const RehearsalDinnerInvites = ({invites}) => {
  return(
      <Grid fluid>
        <SectionTitle title="Can't Wait To See You There" />
        <Row center='xs'>
        <h2>Rehearsal Dinner</h2>
          <Col xs={12}>
          <Row>
            <Col mdOffset={3} md={2} xs={4}/>
            <Col sm={2} xs={4}> <span> Joyfully Accepts </span> </Col>
            <Col sm={3} md={2} xs={4}> <span> Regretfully Declines </span> </Col>
          </Row>
          {invites.map(invite => (
              <Row>
                <Col mdOffset={3} md={2} xs={4} style={{"textAlign": 'right'}}> <span> {invite.firstName} {invite.lastName }</span> </Col>
                <Col sm={2} xs={4}> <input type='radio' id={`${invite.id}_accepts`} name={invite.id} value='accepted'/> </Col>
                <Col sm={3} md={2} xs={4}> <input type='radio' id={`${invite.id}_declines`} name={invite.id} value='declined'/> </Col>
              </Row>
            )
          )}
          </Col>
        </Row>
        <Row center='xs'>
          <Button text="Continue" />
        </Row>
      </Grid>
  )
}

export default RehearsalDinnerInvites;
