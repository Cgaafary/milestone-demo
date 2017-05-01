import { ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj24ze0w113d501157e5omwhu'
});

export const client = new ApolloClient({
  networkInterface: networkInterface
});