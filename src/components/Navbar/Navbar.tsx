import { NavLink } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className="container">
            <ul className="list-item">
                <li>
                    <NavLink to="home" className="linki">
                        Home</NavLink>
                </li>
                <li>
                    <NavLink to="about" className="linki">
                        About</NavLink>
                </li>
                <li>
                    <NavLink to="store" className="linki">
                        Store</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar