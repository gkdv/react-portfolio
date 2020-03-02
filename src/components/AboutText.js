import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class AboutText extends Component {
    render() {
        return (
            <div className='col'>
                <h1>Garrett Krage</h1>
                <p>
                    Hello, My name is garrett krage and I am an up and coming junior developer. I live in the denver
                    area however I am open to work throughout the US. I am A fullstack developer with experience with HTML, CSS, JavaScript,
                    JQuery, MongoDB, MySQL, Express.js, ORM and the MERN stack. My passions are in clean energy. I am A GIS major from the University
                    of Colorado and would like to combine my experience in GIS with web dev.
                </p>
                <div>
                    <Link to='https://github.com/gkdv' style={style}>Github</Link> |
                    <Link to='https://www.linkedin.com/in/garrett-krage-493a9566/' style={style}> LinkedIn</Link> |
                    <Link to='./garrettkrageResume2020.1.pdf' style={style}> Resume</Link> 
                </div>
            </div>
        )
    }
}


const style = {
color: 'black'
}
export default AboutText
