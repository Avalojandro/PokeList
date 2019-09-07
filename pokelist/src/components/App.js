import React, {Component} from 'react';
import './styles/App.css';
import PokeList from './PokeList';
import Title from './Show';
import Pokemon from '../Pokemon';
import Character from './Character';
import 'bulma/css/bulma.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };

      this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id){
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
      const pokemon = new Pokemon(data);

      this.setState({pokemon});
      console.log(pokemon);
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <div className="columns">
          <div className="column"><Title/><Character pokemon={this.state.pokemon}/></div>
          <div className="column">
          <PokeList handleOnClick={this.handleOnClick}/>
          </div>
        </div>
      </div>
    );
  }
}


export default App;