import React, {Component} from 'react';
import TopLeft from './TopLeft';
import LeftUi from './LeftUi';
import RightUi from './RightUi';

class Pokedex extends Component {
  render() {
    return(
      <div className="pokedex">
        <div className="leftside">
          <TopLeft />
          <div className="tube"><div className="line-shadow"></div><div className="line-shadow2"></div></div>
          <div className="left-edge">
            <div className="shadow"></div>
          </div>
          <div className="bottom-edge">
            <div className="shadow"></div>
          </div>
          <LeftUi
            pokemon={this.props.pokemon} getPokemonInput={this.props.getPokemonInput} state={this.props.state}
            nextPkmn={this.props.nextPkmn} prevPkmn={this.props.prevPkmn} spriteFront={this.props.spriteFront}
            spriteBack={this.props.spriteBack} spriteShinny={this.props.spriteShinny}
          />
        </div>
        <RightUi state={this.props.state} abilities={this.props.state.abilities} types={this.props.state.types} />
      </div>
    )
  }
}

export default Pokedex;
