import React, { Component } from 'react'
import Post from "./post/post";

export default class Postlist extends Component {
    render() {
        const {photos} = this.props

        return (
        photos.map((photo) => (
            <Post key={photo.id} {...photo}/>
        )))
    }
}
