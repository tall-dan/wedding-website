import React, { Component } from 'react';
//import gql from 'graphql-tag';
import RehearsalDinnerInvites from './RehearsalDinnerInvites/RehearsalDinnerInvites';
import ReceptionInvites from './ReceptionInvites/ReceptionInvites';
// import respondToInvites from '../../../queries/respondToInvites'

// component design
// top level component that keeps track of invites, and passes invites to a lower level invite display component
// invite display component displays the invitees and what their options are
// is it possible to generalize options in a component?
// or maybe the invite display component renders a lower component based on invite type

class InvitesContainer extends Component {
  constructor({ invites }) {
    super(invites);
    this.events = Object.keys(invites);
    // order is created via priority in event.rb, respondToInvites.js
    this.state = { eventResponseIndex: 0 };
  }

  nextInviteStep = (invites) => {
    this.saveInvites(invites).then(_ =>
      this.setState({ eventResponseIndex: this.state.eventResponseIndex + 1 })
    )
  }

  saveInvites = (invites) => {
    const responses = Object.keys(invites).reduce((args, inviteId) => {
      args.push({ inviteId, status: invites[inviteId] });
      return args;
    }, []);
    // respondToInvites(responses)
  }

  currentlyRespondingTo = () => this.events[this.state.eventResponseIndex]

  render = () => (
    <>
      { this.currentlyRespondingTo() === 'rehearsal_dinner'
          && <RehearsalDinnerInvites invites={this.props.invites['rehearsal_dinner']} saveInvites={this.nextInviteStep}/>
      }
      {
        this.currentlyRespondingTo() === 'reception' && (
          <ReceptionInvites invites={this.props.invites['reception']} saveInvites={this.saveInvites} />
        )
      }
    </>
  )
}

export default InvitesContainer;
