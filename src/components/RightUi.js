import React, {Component} from 'react';

 class RightUi extends Component {
   renderAbilities() {
     return this.props.state.abilities.forEach((ability) => {
       return(<p key={ability}>{ability}</p>);
     });
   }
   renderEvolution() {
     if (this.props.state.evolutions !== '') {
       return(
         <div>
           <p className=""><strong>Evolution: </strong></p>
           <p className="ability">{this.props.state.evolutions[0]}</p>
         </div>
       )
     }
   }
   render() {
     if (this.props.pokemon === null) {
       return(
         <div className="rightside">
           <div className="top">
             <div className="left"><div className="line-shadow"></div></div>
             <div className="slope"></div>
           </div>
           <div className="right-edge">
             <div className="shadow"></div>
           </div>
           <div className="bottom-edge">
             <div className="shadow"></div>
           </div>
           <div className="ui">
             <div className="line-shadow"></div>
             <div className="top-display">
             </div>
             <div className="stat-display">
               <div className="stat-button"></div>
               <div className="stat-button"></div>
               <div className="stat-button"></div>
               <div className="stat-button"></div>
               <div className="stat-button"></div>
               <div className="stat-button"></div>
               <div className="stat-button"></div>
               <div className="stat-button"></div>
               <div className="stat-button"></div>
               <div className="stat-button"></div>
             </div>
             <div className="buttons"></div>
             <div className="type-info"></div>
             <div className="body-info">
               {/* <p><strong>Weight: </strong> {this.props.state.weight} lbs</p> */}
             </div>
           </div>
         </div>
       );
     } else {
       return(
         <div className="rightside">
           <div className="top">
             <div className="left"><div className="line-shadow"></div></div>
             <div className="slope"></div>
           </div>
           <div className="right-edge">
             <div className="shadow"></div>
           </div>
           <div className="bottom-edge">
             <div className="shadow"></div>
           </div>
           <div className="ui">
             <div className="line-shadow"></div>
             <div className="top-display">
               <p>{this.props.state.pokemonDescription}</p>
             </div>
             <div className="stat-display">
               <div className="stat-button"></div>
               <div className="stat-button"></div>
               <div className="stat-button"></div>
               <div className="stat-button"></div>
               <div className="stat-button"></div>
               <div className="stat-button"></div>
               <div className="stat-button"></div>
               <div className="stat-button"></div>
               <div className="stat-button"></div>
               <div className="stat-button"></div>
             </div>
             <div className="buttons"></div>
             <div className="type-info">
               <p><strong>Types: </strong></p>
               <p className="ability">{this.props.state.types[0]}</p>
               <p className="ability">{this.props.state.types[1]}</p>
               {/* <p className=""><strong>Evolution: </strong></p>
               <p className="ability">{this.props.state.evolutions[0]}</p> */}
               {this.renderEvolution()}
             </div>
             <div className="body-info">
               <p><strong>Height: </strong> {this.props.state.height} ft</p>
               <p><strong>Weight: </strong> {this.props.state.weight} lbs</p>
               <p><strong>Abilities: </strong></p>
               <p className="ability">{this.props.state.abilities[0]}</p>
               <p className="ability">{this.props.state.abilities[1]}</p>
             </div>
           </div>
         </div>
       );
     }

   }
 }

 export default RightUi;
