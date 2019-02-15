import { Mocks } from './../../__generated__/graphql';

describe('Pokemon', () => {
  it('simple example', () => {
    cy.setGQLMock<Mocks>({
      Query: () => ({
        pokemon: () => ({
          id: '1',
          name: 'Pikachu',
          image: 'https://img.pokemondb.net/artwork/pikachu.jpg',
        }),
      }),
    })
      .visit('/')
      .contains('Pikachu');
  });

  it('using args', () => {
    cy.setGQLMock<Mocks>({
      Query: () => ({
        pokemon: (root, { name }) => {
          if (name === 'Pikachu') {
            return {
              id: '1',
              name: 'Bulbasaur',
              image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
            };
          }

          return null;
        },
      }),
    })
      .visit('/')
      .contains('Bulbasaur');
  });
});
