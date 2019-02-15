import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';

const GET_POKEMON = gql`
  query GetPokemon($name: String!) {
    pokemon(name: $name) {
      name
      image
    }
  }
`;

function Pokemon({ name }) {
  return (
    <Query query={GET_POKEMON} variables={{ name }}>
      {({ data, loading, error }) => {
        if (loading) return 'Loading...';
        if (error) return 'Something went wrong';

        return (
          data &&
          data.pokemon && (
            <>
              <h1>{data.pokemon.name}</h1>
              <img src={data.pokemon.image} alt={data.pokemon.name} />
            </>
          )
        );
      }}
    </Query>
  );
}

export default Pokemon;
