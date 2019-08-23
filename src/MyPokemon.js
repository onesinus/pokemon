import React, { Component } from "react";
import { PokemonConsumer } from './Pokemon-Context';

class MyPokemon extends Component {
  render() {
    return (
	 <PokemonConsumer>
      {({ pokemon }) => (
	 	 <React.Fragment>
	        <h2>My Pokemon</h2>
	        <p>Pokemon-pokemon yang berhasil ditangkap</p>
	        {
              pokemon.length > 0 ? pokemon.map(item => {
              const {name, nickname} = item;
    
               return (
               	<React.Fragment>
	                <img 
	                  key={name}
	                  src={`${name}.jpg`} 
	                  title={name} 
	                  alt={name}
	                  className="imgPokemon"
	                />
	                <h3>{nickname}</h3>
	            </React.Fragment>
              );
            }) : null
          }
	     </React.Fragment>
	   )}
     </PokemonConsumer>
    );
  }
}
 
export default MyPokemon;