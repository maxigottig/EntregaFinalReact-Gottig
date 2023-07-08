import { Link } from "react-router-dom"
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import CategoryMenu from "../CategoryMenu/CategoryMenu"

const Navbar = () => {
    return (
        <nav classname="Navigation">
            <div className="navbar">
                <div className="LogoAndLinks">
                    <Link to="/" className="link">Home</Link>
                    <Link to="/AboutPage" className="link">About</Link>
                    <Link to="/ContactPage" className="link">Contact</Link>
                </div>
                <div className="CartAndButton">
                    <CategoryMenu/>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar