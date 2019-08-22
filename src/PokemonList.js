import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
 
class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  componentDidMount() {
      fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=10")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(data => (
          {
            name: `${data.name}`,
            url: `${data.url}`,
            thumbnail: `${data.name}.jpg`

          }
        )))
        .then(pokemons => this.setState({
          pokemons,
          isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
    }

 	render() {
      const {pokemons } = this.state;
        return (
          <div className="pokemonList">
            <h2>Daftar Pokemon</h2>
            {
              pokemons.length > 0 ? pokemons.map(item => {
              const {name, url, thumbnail} = item;
              let urlDetail = "/pokemon_detail/"+name;
               return (
                <NavLink to={urlDetail}>
                  <img 
                    key={name} 
                    src={thumbnail} 
                    title={name} 
                    alt={name} 
                    className="imgPokemon"
                  />
                </NavLink>
              );
            }) : null
          }
          </div>
        );
    }
}
 
export default PokemonList;