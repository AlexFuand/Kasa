import './error.scss';
import {Link} from "react-router-dom";

function Error() {
    return (
        <div className="error">
            <div className="error__msg">
                <div className="error__title">404</div>
                <div className="error__smiley">:(</div>
            </div>
            <div className="error__text">Oups! La page que vous demandez n'existe pas</div>
            <Link to="/accueil" className="error__link">Retournez vite sur la page d'accueil !</Link>
        </div>
    )
  };

export default Error ;