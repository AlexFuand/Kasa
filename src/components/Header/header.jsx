import { Link, NavLink } from 'react-router-dom';
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
                <NavLink to="/accueil" className={({isActive}) => isActive ? "navigation__link active" : "navigation__link"} >
                    Accueil
                </NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? "navigation__link active" : "navigation__link"}>
                    A propos
                </NavLink>
            </div>
        </nav>
    </header>
    )
}

export default Header