import React, { Component } from "react";
 
class PokemonDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon_details: [],
      name: ""
    };
  }

  componentDidMount() {
    let url           = window.location.href;
    let url_split     = url.split("/");
    let pokemon_name  = url_split[5];

    fetch("https://pokeapi.co/api/v2/pokemon/"+pokemon_name)
      .then(res => res.json())
      .then(pokemon_details => this.setState({
        pokemon_details,
        isLoaded: false,
        name: pokemon_name
      }))
      .catch(error => console.log('parsing failed', error))
  }



  render() {
    const {name,pokemon_details} = this.state;

    console.log(pokemon_details);
    return (
      <div>
        <h1>{name}</h1>
        <img 
          src={name+".jpg"} 
          title={name} 
          alt={name}
          className="imgPokemon"
        />

        <h2>Types</h2>
        <ul>
          {
            pokemon_details.types ? 
            pokemon_details.types.map(item => {
              const {type} = item;
               return (
                  <li key={type.name}>{type.name}</li>
              );
            }) : null
          }
        </ul>

        <h2>Held Items</h2>
        <ul>
          {
            pokemon_details.held_items ? 
            pokemon_details.held_items.map(item_hi => {
              const {item} = item_hi;
               return (
                  <li key={item.name}>{item.name}</li>
              );
            }) : null
          }
        </ul>

        <h2>Stats</h2>
        <ul>
          {
            pokemon_details.stats ? 
            pokemon_details.stats.map(item => {
              const {stat} = item;
               return (
                  <li key={stat.name}>{stat.name}</li>
              );
            }) : null
          }
        </ul>

        <h2>Moves</h2>
        <ul>
          {
            pokemon_details.moves ? 
            pokemon_details.moves.map(item => {
              const {move} = item;
               return (
                  <li key={move.name}>{move.name}</li>
              );
            }) : null
          }
        </ul>


      </div>
    );
  }
}
 
export default PokemonDetail;