import React, { Component } from "react";
import { NavLink } from "react-router-dom";
 
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
      const {pokemons} = this.state;
      console.log(pokemons)
        return (
          <div className="pokemonList">
            <center><h1>Daftar Pokemon</h1></center>
            {
              pokemons.length > 0 ? pokemons.map(item => {
              const {name, thumbnail} = item;
              let urlDetail = "/pokemon_detail/"+name;
               return (
                  <NavLink key={name}  to={urlDetail}>
                    <img 
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