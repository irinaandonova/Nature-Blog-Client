import { Link } from "react-router-dom"
import './header.css'
const Header = () => {
    return(
        <header>
            <nav>
                <ul className="header-links">
                    <Link to="/" className="links">Home</Link>
                    <Link to="/hiking-trails" className="links">Hiking Trails</Link>
                    <Link to="/seasides" className="links">Seaside</Link>
                    <Link to="/parks" className="links">Parks</Link>
                    <Link to="/destination/create" className="links">Create Destination</Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
