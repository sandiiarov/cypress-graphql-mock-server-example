import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './client';
import Pokemon from './Pokemon';

function App() {
  return (
    <ApolloProvider client={client}>
      <Pokemon name="Pikachu" />
    </ApolloProvider>
  );
}

export default App;
