import React, { Component } from 'react'
import Button from '../../togglebutton/togglebutton'
import ShareButton from './sharebutton/sharebutton'
import './post.css'

export default class Post extends Component {
    handleClick = () => {

    }

    render() {
        const {img_src, earth_date, } = this.props
        const {name, full_name} = this.props.camera

        return (
            
            <div className="post">
               <h3 className="title">Spacestagram</h3> 
               <p className="author">Brought to you by NASA's API</p>
               <div className="imgcontent">
                <img src={img_src} alt="" className="image"/>
                <h3 className="description">{name} rover - {full_name}</h3>
                <p className="date">{earth_date}</p>
                <Button >Like</Button>
                <ShareButton imgsrc={img_src}/>
               </div>
            </div>
        )
    }
}
