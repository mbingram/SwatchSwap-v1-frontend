import React, { Component } from "react";
import logo from './swatch_logo.png'
import { ChromePicker } from 'react-color';

export default class Header extends Component {

    state = {
        background: []
    }

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };

    render() {
        return (
            <div className="header">
                <ChromePicker className="chrome-picker"
                    color={ this.state.background }
                    onChangeComplete={ this.handleChangeComplete } />
                <img src={logo} alt="logo" id="logo" className="logo"></img>
                <p className="header-links"><a href="http://colormind.io/image/">Get a Pallete From an Image</a> | <a href="http://colormind.io/api-access/">Hit the API</a></p>
            </div>
        )
    }
}