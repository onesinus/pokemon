import React, { createContext } from 'react';

const PokemonContext = createContext();

export class PokemonProvider extends React.Component {
  updatepokemon = newpokemon => {
    this.setState({ pokemon: this.state.pokemon.concat(newpokemon) });
  };

  releasepokemon = name => {
    let filteredPokemon = this.state.pokemon.filter(function(pokemon){
      return name !== pokemon.name;
    });
    this.setState({ pokemon: filteredPokemon });
  };

  state = {
    pokemon: [],
    updatepokemon: this.updatepokemon,
    releasepokemon: this.releasepokemon
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
