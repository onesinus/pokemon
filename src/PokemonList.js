import React, { Component } from "react";
 
class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  componentDidMount() {
      fetch("https://randomuser.me/api/?results=10")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(data => (
          {
            id: `${data.id.name}`,
            firstName: `${data.name.first}`,
            lastName: `${data.name.last}`,
            location: `${data.location.state}, ${data.nat}`,
            thumbnail: `${data.picture.large}`,

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
          <div className="boxWhite">
            <h2>Random User</h2>
            {
              pokemons.length > 0 ? pokemons.map(item => {
              const {id, firstName, lastName, location, thumbnail} = item;
               return (

               <div key={id} className="bgCircle">
               <center><img src={thumbnail} alt={firstName} className="circle"/> </center><br />
               <div className="ctr">
                  {firstName} {lastName}<br />
                  {location}
                </div>

              </div>
              );
            }) : null
          }
          </div>
        );
    }
}
 
export default PokemonList;