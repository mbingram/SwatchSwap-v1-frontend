import React, { Component } from "react";
import './App.css';
import ColorsDiv from './ColorsDiv'
import Header from './Header'
const baseURL = "http://colormind.io/api/"

class App extends Component {

  state = {
    colors: []
  }

  componentDidMount(){
    fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify({
      model: 'default'
    })
  })
    .then(response => response.json())
    .then(colors => {
      console.log(colors.result)
      this.setState({ colors: colors.result })
      })
  };

  render(){
    return (
      <div className="App">
        <Header />
        <ColorsDiv colors={this.state.colors}/>
      </div>
    );
  }

}

export default App;

