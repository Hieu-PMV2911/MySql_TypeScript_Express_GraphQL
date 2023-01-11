import React from 'react'
import "./css/navbar.css"
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
	<ul>
		<li>
			<Link to='/'>Home</Link>
		</li>
		<li>
			<Link to='/create-user'>Create User</Link>
		</li>
		<li>
		<Link to='/contact'>Contact</Link>
		</li>
	</ul>
    </div>
  )
}

export default Navbar