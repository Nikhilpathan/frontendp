import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className="header-contents">
                <h2>Order your favourite book here</h2>
                <p>Reading books is akin to embarking on a voyage through boundless realms of imagination and knowledge. 
                    It's a transcendent experience where words on a page
                     metamorphose into vivid landscapes, complex characters, and profound ideas.
                </p>
                <a href="#food-display"><button>View Booklist</button></a>
                
            </div>
        </div>
    )
}
export default Header