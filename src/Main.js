import React, { Component }  from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import PokemonList from "./PokemonList";
import PokemonDetail from "./PokemonDetail";
import MyPokemon from "./MyPokemon";

class Main extends Component{
	render(){
		return(
			<HashRouter>
				<div>
					<h1 className="title">Pokemon Apps</h1>
					<ul className="header">
						<li><NavLink to="/">Pokemon List</NavLink></li>
						<li><NavLink to="/pokemon_detail">Pokemon Detail</NavLink></li>
						<li><NavLink to="/my_pokemon">My Pokemon</NavLink></li>
					</ul>
					<div className="content">
						<Route exact path="/" component={PokemonList} />
						<Route path="/pokemon_detail" component={PokemonDetail} />
						<Route path="/my_pokemon" component={MyPokemon} />
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default Main;