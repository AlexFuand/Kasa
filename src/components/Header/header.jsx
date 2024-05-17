import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import './header.scss';

function Header () {
    return (
    <header>
        <nav className="navigation">
            <Link to="/accueil">
                <img className="navigation__logo" src = {logo} alt = "Logo" />
            </Link>
            <div className="navigation__div">
                <Link className="navigation__link" to="/accueil">
                    Accueil
                </Link>
                <Link className="navigation__link" to="/about">
                    A propos
                </Link>
            </div>
        </nav>
    </header>
    )
}

export default Header