import { Link } from "react-router-dom"

const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <Link to="home">Home</Link>
                    <Link to="hiking-trails">Hiking Trails</Link>
                    <Link to="seasides">Seaside</Link>
                    <Link to="parks">Parks</Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
