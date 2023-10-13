import Logo from '../assets/Logo.png';
import { Link } from 'react-scroll';

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
                    <img src="" alt="" className="deskmenuing" />
                    Contact Me
                </button>
            </nav>
        </div>
    )
}

export default Navbar