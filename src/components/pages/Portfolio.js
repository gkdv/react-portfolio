import React, { Component } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import PortCards from '../PortCards'

export class Portfolio extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <PortCards cards={this.props.cards}/>
                <Footer />
            </div>
        )
    }
}

export default Portfolio
