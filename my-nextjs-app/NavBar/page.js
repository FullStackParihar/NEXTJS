import React from 'react'
import {Link} from 'react-router-dom'
 
const navbar = () => {
    return (
        <div>
            <div>
                logo@i
            </div>
            <ul>
                <LInk to="/">
                    <li>Home</li>
                </LInk>
                <LInk to="/about">
                    <li>About</li>
                </LInk>
                <LInk>
                    <li>Menu</li>
                </LInk>
                <LInk>
                    <li>Contact</li>
                </LInk>
                <LInk>
                    <li>Blog</li>
                </LInk>


            </ul>


        </div>
    )
}

export default navbar