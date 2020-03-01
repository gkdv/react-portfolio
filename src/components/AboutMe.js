import React, { Component } from 'react'
import Image from './Image'
import AboutText from './AboutText'

export class AboutMe extends Component {
    render() {
        return (
            <div className="row" style={style}>
                <Image />
                <AboutText />
            </div>
        )
    }
}

const style = {
    padding: '15% 30% 20%'
}
export default AboutMe
