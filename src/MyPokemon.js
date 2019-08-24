import React, { Component } from "react";
import { PokemonConsumer } from './Pokemon-Context';

class MyPokemon extends Component {
  render() {
    return (
	 <PokemonConsumer>
      {({ pokemon, releasepokemon }) => (
	 	 <React.Fragment>
	        <h2>My Pokemon</h2>
	        <p>Pokemon-pokemon yang berhasil ditangkap</p>
	        {
              pokemon.length > 0 ? pokemon.map(item => {
              const {name, nickname} = item;
    
               return (
               	<div className="myPokemon" key={Math.random()}>
	                <img 
	                  src={`${name}.jpg`} 
	                  title={name} 
	                  alt={name}
	                />
	                <center>
		                <h3>{nickname}</h3>
		                <button className="button" onClick={() => releasepokemon(name)}>Release</button>
		            </center>
	            </div>
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