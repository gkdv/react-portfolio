import React, { Component } from 'react'

export class Card extends Component {
    render() {
        return (
            <div style={style}>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={this.props.cardInfo.src} className="card-img-top" alt={this.props.cardInfo.alt} />
                    <div className="card-body">
                     <h5 className="card-title">{this.props.cardInfo.cardTitle}</h5>
                     <p className="card-text">{this.props.cardInfo.cardText}</p>
                    </div>
                </div>
            </div>
        )
    }
}


const style = {
    padding: '1%'
}
export default Card
