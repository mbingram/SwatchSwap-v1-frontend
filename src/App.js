import React, { Component } from "react";
import './App.css';
import ColorsDiv from './ColorsDiv'
import Header from './Header'
import PremadeDiv from './PremadeDiv'
const baseURL = "http://colormind.io/api/"
const premadeURL = 'http://colormind.io/list/'

export default class App extends Component {

  state = {
    colors: [],
    premadeColors: []
  }

  reloadColors = () => {
    fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify({
        model: 'default'
      })
    })
      .then(response => response.json())
      .then(colors => {
        this.setState({ colors: colors.result })
        })
  };

  premadeColors = () => {
    fetch(premadeURL, {
      method: 'POST',
      body: JSON.stringify({
        model: 'default'
      })
    })
      .then(response => response.json())
      .then(swatches => {
        this.setState({ premadeColors: swatches.result })
        })
  }

  componentDidMount(){
    this.reloadColors()
    this.premadeColors()
  };

  render(){
    return (
      <div className="App">
        <Header reloadColors={this.reloadColors} />
        <ColorsDiv colors={this.state.colors} />
        {/* <PremadeDiv premadeColors={this.state.premadeColors}/> */}
      </div>
    );
  }

}


