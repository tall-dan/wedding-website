import React, { Component } from 'react';
import InviteeResponse from './InviteeResponse/InviteeResponse';
import titleize from '../../../shared/titleize';

// component design
// top level component that keeps track of invites, and passes invites to a lower level invite display component
// invite display component displays the invitees and what their options are

class InvitesContainer extends Component {
  constructor({ invites }) {
    super(invites);
    this.events = Object.keys(invites);
    // order is created via priority in event.rb, respondToInvites.js
    this.state = { eventResponseIndex: 0 };
  }

  guestsAcceptingReceptionInvites = (invites) => {
    return this.props.invites.reception.reduce((acceptingGuests, blankInvite) =>  {
      if (invites[blankInvite.id] === 'accepted') return acceptingGuests.concat(blankInvite.guest)
      else return acceptingGuests
    }, [])
  }

  nextInviteStep = (invites) => {
    if (this.currentlyRespondingTo() === 'reception') {
      const guests = this.guestsAcceptingReceptionInvites(invites)
      const eventId = this.props.invites[this.currentlyRespondingTo()][0].event.id
      // TODO: if no one is accepting, direct to some see ya later page
      window.location.href = `/rsvp/mealSelection?guests=${encodeURIComponent(JSON.stringify(guests))}&eventId=${JSON.stringify(eventId)}`
    } else {
      this.setState({ eventResponseIndex: this.state.eventResponseIndex + 1 })
    }
  }

  currentlyRespondingTo = () => this.events[this.state.eventResponseIndex]

  render = () => (
    <>
      <InviteeResponse invites={this.props.invites[this.currentlyRespondingTo()]} saveInvites={this.nextInviteStep} eventName={titleize(this.currentlyRespondingTo())}/>
    </>
  )
}

export default InvitesContainer;
