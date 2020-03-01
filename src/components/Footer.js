import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div style={style}>
                <footer className="page-footer font-small bg-light">            
                    <div className="footer-copyright text-center py-3">Photo by Joanna Kosinska on Unsplash</div>      
                </footer>
            </div>
        )
    }
}

const style = {
    position: 'fixed',
    bottom: '0px',
    width: '100%',
}

export default Footer
