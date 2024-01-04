import React from 'react'
import { Link } from 'react-router-dom'

const Navbars = () => {
  return (
    <div>
        <ul>
            <li><Link to="/"> Home<Link/></li>
            <li><Link>About</Link></li>
            <li><Link>Contact</Link></li>    
            <li><link>Not-Found</link></li>
        </ul>
    </div>
  )
}

export default Navbars