import Logo from '../../assets/Logo.png';
import { Link } from 'react-scroll';
import contact from '../../assets/messenger.png';
import "../navbar/navbar.css";

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <img className="logo" src={Logo} alt="logo" />
                <div className="deskmenu">
                    <Link className="deskmenulist">Home</Link>
                    <Link className="deskmenulist">About</Link>
                    <Link className="deskmenulist">Projects</Link>
                    <Link className="deskmenulist">Skills</Link>
                </div>
                <button className="deskmenubt">
                    <img src={contact} alt="message" className="deskmenuimg" />
                    Contact Me
                </button>
            </nav>
        </div>
    )
}

export default Navbar