import React, { Component } from 'react'
import logo from '../utils/photoMe.jpeg'
import '../Image.css'

export class Image extends Component {
    render() {
        return (
            <div className='col'>
                <img src={logo} className="img-rounded" alt="Image of me" />
            </div>
        )
    }
}

export default Image
