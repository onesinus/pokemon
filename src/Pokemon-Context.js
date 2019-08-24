import React, { createContext } from 'react';

const PokemonContext = createContext();

export class PokemonProvider extends React.Component {
  updatepokemon = newpokemon => {
    this.setState({ pokemon: this.state.pokemon.concat(newpokemon) });
  };

  releasepokemon = name => {
    console.log(this.state.pokemon);
    console.log(name);

    let filteredPokemon = this.state.pokemon.filter(function(pokemon){
      return [name].indexOf(pokemon.name) > -1;
    });

    console.log(filteredPokemon);


    this.setState({ pokemon: filteredPokemon });

  };

  state = {
    pokemon: [{"name": "Arbok", "nickname":"Bobrok"}],
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
