import React, { Component } from 'react'
import Image from './Image'
import AboutText from './AboutText'
import Footer from './Footer'

export class AboutMe extends Component {
    render() {
        return (
            <>
                <div className="row" style={style}>
                    <Image />
                    <AboutText />
                </div>
                <Footer />
            </>
        )
    }
}

const style = {
    padding: '15% 30% 20%'
}
export default AboutMe
