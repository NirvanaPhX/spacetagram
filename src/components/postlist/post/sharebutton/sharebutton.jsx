import React, { Component } from 'react'
import './sharebutton.css'

export default class ShareButton extends Component {
    state = {
        copied: false,
        hoverOverShare: false,
    }

    copyImgLink = () => {
        navigator.clipboard.writeText(this.props.imgsrc)
        this.setState({copied: true})
        setTimeout(() => {
            this.setState({copied: false})
        }, 1000)
    }

    handleMouseIn = () => {
        this.setState( {hoverOverShare:true})

    }

    handleMouseOut = () => {
        this.setState({hoverOverShare:false})
    }

    render() {
        const tooltipStyle = {display: this.state.hoverOverShare? 'block':'none'}
        const popupStyle = {display: this.state.copied? 'block': 'none'}

        return  (
            <div className="right">
                <img className="sharebutton" onMouseOver={this.handleMouseIn} onMouseOut={this.handleMouseOut} onClick={this.copyImgLink} src="https://img.icons8.com/ios-glyphs/45/000000/share--v2.png" alt="share"/> 
                <div style={popupStyle} className="popup">Copied to clipboard successfully!</div>
                <div className="tooltip" style={tooltipStyle}>Click here to share with your friends</div>
            </div>
        )
    }
}
