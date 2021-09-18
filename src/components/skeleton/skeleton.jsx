import React from 'react'
import './skeleton.css'

export default function skeleton() {
    for (let i=0; i<2; i++) {
        return (
        <div className="post-loading">
        <h3 className="title skeleton skeleton-text"></h3> 
        <p className="author skeleton skeleton-text"></p>
        <div className="imgcontent">
            <img className="image skeleton" alt=""/>
            <p className="date skeleton skeleton-text"></p>
            <button className="likebutton skeleton skeleton-button"></button>
        </div>
        </div>
        )
    }
}
