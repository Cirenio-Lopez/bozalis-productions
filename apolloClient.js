import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-us-west-2.graphcms.com/v2/cl58q903e58q201t806p00ma7/master",
  cache: new InMemoryCache(),
});

export default client;
