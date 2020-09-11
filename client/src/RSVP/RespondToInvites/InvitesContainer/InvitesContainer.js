import React, { Component } from 'react';
import RehearsalDinnerInvites from './RehearsalDinnerInvites/RehearsalDinnerInvites'
import ReceptionInvites from './ReceptionInvites/ReceptionInvites'
import gql from 'graphql-tag';
//import respondToInvites from '../../../queries/respondToInvites'

  // component design
  // top level component that keeps track of invites, and passes invites to a lower level invite display component
  // invite display component displays the invitees and what their options are
  // is it possible to generalize options in a component?
  // or maybe the invite display component renders a lower component based on invite type

class InvitesContainer extends Component {
  constructor({invites}) {
    super(invites);
    this.events = Object.keys(invites);
    // is there any way to guaranteee that we're going to get reception before rehearsal dinner?
    this.state = { respondingTo: this.events[0] }
  };

  nextInviteStep = (invites) => {
    this.saveInvites(invites)
    switch(this.state.respondingTo) {
      case 'rehearsalDinner':
        this.setState({respondingTo: 'reception'})
        break;
      case 'reception':
        this.setState({respondingTo: 'meal_selection'}) // this may wind up being more than just meal selection
        debugger
        break;
    }
  }

  saveInvites = (invites) => {
    const responses = Object.keys(invites).reduce((args, inviteId) => {
      args.push({inviteId, status: invites[inviteId]})
      return args
    }, [])
    //respondToInvites(responses)
  }

  render = () => (
    <>
      { this.state.respondingTo === 'rehearsal_dinner' &&
          <RehearsalDinnerInvites invites={this.props.invites[this.state.respondingTo]} />
      }
      {
        this.state.respondingTo === 'reception' && (
          <ReceptionInvites invites={this.props.invites[this.state.respondingTo]} saveInvites={this.nextInviteStep} />
        )
      }
    </>
  )
}

export default InvitesContainer;
