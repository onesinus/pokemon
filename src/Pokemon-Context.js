import React, { createContext, useEffect } from 'react';

const PokemonContext = createContext({
  pokemon: '',
  updatepokemon: () => {},
});

export class PokemonProvider extends React.Component {
  updatepokemon = newpokemon => {
    this.setState({ pokemon: this.state.pokemon.concat(newpokemon) });
  };

  state = {
    pokemon: [],
    updatepokemon: this.updatepokemon,
  };

  render() {
    return (
      <PokemonContext.Provider value={this.state}>
        {this.props.children}
      </PokemonContext.Provider>
    );
  }
}

export const PokemonConsumer = PokemonContext.Consumer;
