import React, { Component } from 'react'

export class Card extends Component {
    render() {
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={this.props.src} className="card-img-top" alt={this.state.alt} />
                    <div className="card-body">
                        <h5 className="card-title">ddddddd</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
