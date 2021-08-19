import React from 'react'
import {Link} from 'react-router-dom'
const navbar = () => {
    return (
        <div>
            <ul>
                <Link to='/'><li>home</li></Link>
                <Link to='/dashboard'><li>dashboard</li></Link>
                <Link to='/about'><li>about</li></Link>
            </ul>
        </div>
    )
}

export default navbar
