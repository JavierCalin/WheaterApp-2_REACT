import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';


const cities = [
  'Buenos Aires,ar',
  'Barcelona,es',
  'Paris,fr',
  'Madrid, es',
  'Lima,pe'
]

class App extends Component {
  handleSelectionLocation = city =>{
    console.log(`ejecuta handleSelectionLocation con : ${city}`)
  }
  render() {
    return (
      <div className="App">
        <LocationList cities={cities} onSelectedLoction={this.handleSelectionLocation}/>
      </div>
    );
  }
}

export default App;
