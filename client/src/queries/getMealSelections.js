import gql from 'graphql-tag';

const getMealSelections = (guestIds, eventId) => gql`
      {
        mealSelections(guestIds: [${guestIds}], eventId: "${eventId}") {
          id
          event {
            id
            name
          }
          guest {
            displayName
            id
          }
          selection
          options
        }
      }
    `;


export default getMealSelections;
