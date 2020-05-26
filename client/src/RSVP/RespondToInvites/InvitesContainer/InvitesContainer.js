import React, { Component } from 'react';
import RehearsalDinnerInvites from './RehearsalDinnerInvites/RehearsalDinnerInvites'

  // component design
  // top level component that keeps track of invites, and passes invites to a lower level invite display component
  // invite display component displays the invitees and what their options are
  // is it possible to generalize options in a component?
  // or maybe the invite display component renders a lower component based on invite type

class InvitesContainer extends Component {
  constructor({invites}) {
    super(invites);
    this.events = Object.keys(invites);
    this.state = { respondingTo: this.events[0] }
  };

  render = () => (
    this.state.respondingTo === 'rehearsal_dinner' && (
      <RehearsalDinnerInvites invites={this.props.invites[this.state.respondingTo]} />
    )
  )
}

export default InvitesContainer;
