import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.APOLLO_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export default client;
