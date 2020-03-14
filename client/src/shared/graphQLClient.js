import ApolloClient from 'apollo-boost';

const urls = {
  production: 'http://api.mcschepers-wedding.com',
};

const client = new ApolloClient({ });
 // #TODO: Figure out how to make this work in prod. maybe url based? seems hacky.

export default client;
