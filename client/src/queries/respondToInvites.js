import gql from 'graphql-tag';
// import { useMutation } from '@apollo/react-hooks';

const respondToInvites = gql`
  mutation respondToInvite($responses: [InviteInput!]!) {
      respondToInvites(responses: $responses){
        success
      }
    }
`;

export default respondToInvites;
