import gql from 'graphql-tag';

const selectTransportation = gql`
  mutation selectTransportation($selection: TransportationInput!) {
      selectTransportation(selection: $selection){
        success
      }
    }
`;

export default selectTransportation;
