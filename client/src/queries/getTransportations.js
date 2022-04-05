import gql from 'graphql-tag';

const getTransportations = (guestIds, eventId) => gql`
      {
        transportations(guestIds: [${guestIds}], eventId: "${eventId}") {
          journeys
          event {
            id
          }
          guest {
            displayName
            id
          }
        }
        transportationOptions(eventId: "${eventId}")
     }
     `;


export default getTransportations;
