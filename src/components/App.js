import React, { Component } from 'react';
import axios from 'axios';
import Pokedex from './Pokedex';

class App extends Component {
  constructor() {
    super();
    this.state =  {
      pokemon: '1',
      pokemonDisplayed: '',
      abilities: [],
      types: [],
      evolutions: []
    }
    this.fetchApiData = this.fetchApiData.bind(this);
    this.fetchSpeciesData = this.fetchSpeciesData.bind(this);
    this.fetchEvolutions = this.fetchEvolutions.bind(this);
    this.getPokemonInput = this.getPokemonInput.bind(this);
    this.prevPkmn = this.prevPkmn.bind(this);
    this.nextPkmn = this.nextPkmn.bind(this);
    this.spriteFront = this.spriteFront.bind(this);
    this.spriteShinny = this.spriteShinny.bind(this);
    this.spriteBack = this.spriteBack.bind(this);
    this.getPkmnDetails = this.getPkmnDetails.bind(this);
    this.getAbilities = this.getAbilities.bind(this);
    this.getTypes = this.getTypes.bind(this);
    this.getEvolution = this.getEvolution.bind(this);
  }
  componentWillMount() {
    this.fetchApiData(1);
  }

  getPokemonInput(e) {
    e.preventDefault();
    this.fetchApiData(e.target.pokemon.value.toLowerCase());
  }

  spriteFront() {
    this.setState({sprite: this.state.front});
  }

  spriteBack() {
    this.setState({sprite: this.state.back});
  }

  spriteShinny() {
    this.setState({sprite: this.state.shinny});
  }

  nextPkmn() {
    if (this.state.id == 802) {
      var nextId = 1;
    } else {
      var nextId = this.state.id + 1;
    }
    this.fetchApiData(nextId);
  }

  prevPkmn() {
    if (this.state.id == 1) {
      var prevId = 802;
    } else {
      var prevId = this.state.id - 1;
    }
    this.fetchApiData(prevId);
  }

  getPkmnDetails(details) {
    for (var i = 0; i < details.length; i++) {
      if (details[i].language.name == 'en') {
        this.setState({pokemonDescription: details[i].flavor_text});
        break;
      }
    }
  }

  getAbilities(abilities) {
    var abilitiesArray = [];
    abilities.forEach((ability) => {
      abilitiesArray.push(ability.ability.name);
    });
    this.setState({abilities: abilitiesArray})
  }

  getTypes(types) {
    var typesArray = [];
    types.forEach((type) => {
      typesArray.push(type.type.name);
    });
    this.setState({types: typesArray})
  }

  getEvolution(evolutions) {
    var evolutionsArray = [];
    evolutions.forEach((evolution) => {
      evolutionsArray.push(evolution.species.name);
    });
    this.setState({
      evolutions: evolutionsArray
    })
  }

  fetchApiData(pokemon) {
    var url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    axios.get(url).then((response) => {
      this.setState({
        pokemonDisplayed: response.data,
        sprite: response.data.sprites.front_default,
        front: response.data.sprites.front_default,
        back: response.data.sprites.back_default,
        shinny: response.data.sprites.front_shiny,
        id: response.data.id,
        weight: this.newtonToPounds(response.data.weight),
        height: this.metersToFeet(response.data.height)
      });
      this.getAbilities(response.data.abilities);
      this.fetchSpeciesData(response.data.species.url);
      this.getTypes(response.data.types);
    }).catch(error => console.log("Error: ", error));
  }

  newtonToPounds(newtons) {
    return (newtons * .2248).toFixed(1);
  }

  metersToFeet(meters) {
    meters /= 10;
    return (meters/0.3048).toFixed(1);
  }

  fetchSpeciesData(url) {
    axios.get(url).then((response) => {
      this.getPkmnDetails(response.data.flavor_text_entries);
      if (response.data.evolution_chain !== null) {
        this.fetchEvolutions(response.data.evolution_chain.url);
      }
    }).catch(error => console.log("Error: ", error));
  }

  fetchEvolutions(url) {
    axios.get(url).then((response) => {
      this.getEvolution(response.data.chain.evolves_to);
    }).catch(error => console.log("Error: ", error));
  }

  render() {
    return (
      <div className="app">
        <Pokedex
          getPokemonInput={this.getPokemonInput} pokemon={this.state.pokemonDisplayed} state={this.state}
          nextPkmn={this.nextPkmn} prevPkmn={this.prevPkmn} spriteFront={this.spriteFront} spriteBack={this.spriteBack}
          spriteShinny={this.spriteShinny}
        />
      </div>
    );
  }
}

export default App;
