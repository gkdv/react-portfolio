import React, { Component } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import ContactForm from '../ContactForm'

export class contact extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ContactForm />
                <Footer />
            </div>
        )
    }
}

export default contact
