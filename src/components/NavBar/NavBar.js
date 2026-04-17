import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
    return (
        <nav id="navBanner">
            <div id="navLinks">
                <Link to="/">Home</Link>
                <Link to="/work">Work History</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>
    )
}

export default NavBar
