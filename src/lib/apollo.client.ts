import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
  credentials: "include", // If using cookies for authentication
});

export default client;