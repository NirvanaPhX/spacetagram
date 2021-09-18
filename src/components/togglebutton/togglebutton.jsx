import React, { Component } from 'react'
import './togglebutton.css'
import checkmark from './checked.png'


export default class likebutton extends Component {
    state = {
        liked: false
    }

    render() {
        if (this.state.liked) {
            return <button className="button toggled" onClick={() => this.setState({liked:!this.state.liked})}>{this.props.children}<img src={checkmark} alt="checkmark" className="checkmark"></img></button>
        } else {
            return <button className="button" onClick={() => this.setState({liked:!this.state.liked})}>{this.props.children}</button>
        }
    }
}
