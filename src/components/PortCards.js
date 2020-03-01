import React, { Component } from 'react'
import Card from './Card'

export class PortCards extends Component {
    render() {
        state = {
            card: [{
                src: " ",
                alt: " ",
                cardTitle: " ",
                cardText: " "
            }]
        }
        return (
            <div>
                <Card card={
                    this.state.card.src = 'https://picsum.photos/200',
                    this.state.card.alt = 'picture goes'
                } />

            </div>

        )
    }
}

export default PortCards
