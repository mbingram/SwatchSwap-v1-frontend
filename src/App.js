import React, { Component } from "react";
import './App.css';
import ColorsDiv from './ColorsDiv'
import Header from './Header'
import NavBar from './NavBar'
import PremadeDiv from './PremadeDiv'
import Divider from './Divider'

const baseURL = "http://colormind.io/api/"
const palleteSeeds = "http://localhost:3000/palletes"

export default class App extends Component {

  state = {
    colors: [],
    background: [],
    premadePalletes: []
  }

  loadColors = () => {
    fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify({
        model: 'default',
      })
    })
      .then(response => response.json())
      .then(colors => {
        this.setState({ colors: colors.result })
        })
  };

  premadePalletes = () => {
    fetch(palleteSeeds)
      .then(response => response.json())
      .then(palletes => {
        palletes.forEach(pallete => {
          console.log(pallete.hexcodes)
          const splitUp = pallete.hexcodes.split(",")
          this.setState({ premadePalletes: splitUp })
        })})}

  componentDidMount(){
    this.loadColors()
    this.premadePalletes()
  };

  render(){
    return (
      <div className="App">
        <Header />
        <NavBar
          loadColors={this.loadColors}/>
        <ColorsDiv
          colors={this.state.colors} />
        <Divider />
        <PremadeDiv premadePalletes={this.state.premadePalletes} />

      </div>
    );
  }

}


