import React, { Component } from 'react'
import Card from './Card'



export class PortCards extends Component {
    render() {

        return (
            <div className='row' style={style}>
                <Card cardInfo={{
                    src: 'https://picsum.photos/200', 
                    alt: 'project photo', 
                    cardTitle: 'pizza', 
                    cardText: 'sauce'
                }}/>
                <Card cardInfo={{
                    src: 'https://picsum.photos/200', 
                    alt: 'project photo', 
                    cardTitle: 'pizza', 
                    cardText: 'sauce'
                }}/>
                <Card cardInfo={{
                    src: 'https://picsum.photos/200', 
                    alt: 'project photo', 
                    cardTitle: 'pizza', 
                    cardText: 'sauce'
                }}/>
                <Card cardInfo={{
                    src: 'https://picsum.photos/200', 
                    alt: 'project photo', 
                    cardTitle: 'pizza', 
                    cardText: 'sauce'
                }}/>
                <Card cardInfo={{
                    src: 'https://picsum.photos/200', 
                    alt: 'project photo', 
                    cardTitle: 'pizza', 
                    cardText: 'sauce'
                }}/>

            </div>

        )
    }
}

const style = {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '5%'
    
}
export default PortCards
