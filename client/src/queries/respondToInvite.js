import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const respondToInvite	= gql`
  mutation respondToInvite($invites: [Invite!]!){
     respondToInvite(responses: $invites){
      success
    }
  }
`;

export default respondToInvite;
