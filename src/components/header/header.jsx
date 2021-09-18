import React, { Component } from 'react'
import logo from './nasa.png'
import astronaut from './astronaut.png'
import './header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
               <img src={logo} alt="logo" className="header_logo"/>
               <h2 className="header_title">Spacestagram</h2> 
               <img src={astronaut} alt="astronaut" className="header_right_img"></img>
            </div>
        )
    }
}
