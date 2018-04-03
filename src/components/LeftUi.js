import React, {Component} from 'react';

class LeftUi extends Component {
  loadUi() {

    return (
      <div className="screen">
        <div className="name">
          <h3>{this.props.pokemon.name}</h3>
        </div>
        <div className="sprite">
        </div>
      </div>
    )
  }
  render() {
    if (this.props.pokemon === null) {
      return(
        <div className="ui">
          <div className="display">
            <div className="display-top">
              <div className="buttons">
                <div className="button"></div>
                <div className="button br"></div>
              </div>
              <div className="screen">
                <div className="sprite">
                </div>
              </div>
            </div>
            <div className="display-left"></div>
            <div className="display-bottom">
              <div className="big-button"></div>
              <div className="speaker">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="display-bg">
            <div className="display-top"></div>
            <div className="display-left"></div>
            <div className="display-bottom"></div>
          </div>
          <div className="key-buttons">
            <div className="shinny"><p>S</p></div>
            <div className="front"></div>
            <div className="back"></div>
            <div className="d-pad">
              <div className="block up"></div>
              <div className="block down"></div>
              <div className="block left"></div>
              <div className="block right"></div>
              <div className="block center"></div>
            </div>
          </div>
          <div className="search">
            <input name="pokemon" placeholder="Pkmn Name or Ndex Id" onInput={this.props.getPokemonInput} />
          </div>
        </div>
      )
    } else {
      var pokemon = this.props.pokemon;
      return(
        <div className="ui">
          <div className="display">
            <div className="display-top">
              <div className="buttons">
                <div className="button"></div>
                <div className="button br"></div>
              </div>
              <div className="screen">
                <div className="sprite">
                  <img src={this.props.state.sprite} />
                  <div className="platform"></div>
                </div>
                <div className="name">
                  <div className="left" onClick={this.props.prevPkmn}>&#9668;</div>
                  <div className="right" onClick={this.props.nextPkmn}>&#9658;</div>
                  <h3>{this.props.pokemon.name}</h3>
                </div>

              </div>
            </div>
            <div className="display-left"></div>
            <div className="display-bottom">
              <div className="big-button"></div>
              <div className="speaker">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="display-bg">
            <div className="display-top"></div>
            <div className="display-left"></div>
            <div className="display-bottom"></div>
          </div>
          <div className="key-buttons">
            <div className="shinny" onClick={this.props.spriteShinny}><p>S</p></div>
            <div className="front" onClick={this.props.spriteFront}></div>
            <p className="front-text">Front</p>
            <div className="back" onClick={this.props.spriteBack}></div>
            <p className="back-text">Back</p>
            <div className="d-pad">
              <div className="block left" ></div>
              <div className="block right" ></div>
              <div className="block up" ></div>
              <div className="block down" ></div>
              <div className="block center"></div>
            </div>
          </div>
          <div className="search">
            <form onSubmit={this.props.getPokemonInput}>
              <input autoComplete="off" name="pokemon" placeholder="Pkmn Name or Ndex Id"/>
            </form>
          </div>
        </div>
      )
    }
  }
}

export default LeftUi;
