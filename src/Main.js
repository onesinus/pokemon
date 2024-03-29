import React, { Component }  from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import PokemonList from "./PokemonList";
import PokemonDetail from "./PokemonDetail";
import MyPokemon from "./MyPokemon";
import {PokemonProvider} from "./Pokemon-Context";

class Main extends Component{
	render(){
		return(
			<HashRouter>
				<PokemonProvider>
					<ul className="header">
						<NavLink to="/"><img id="logo" src="logo.png" alt="Logo not loaded"/></NavLink>
						<li><NavLink to="/my_pokemon">My Pokemon</NavLink></li>
						<li><NavLink to="/">Pokemon List</NavLink></li>
					</ul>
					<div className="content">
						<Route exact path="/" component={PokemonList} />
						<Route path="/pokemon_detail" component={PokemonDetail} />
						<Route path="/my_pokemon" component={MyPokemon} />
					</div>
				</PokemonProvider>
			</HashRouter>
		);
	}
}

export default Main;