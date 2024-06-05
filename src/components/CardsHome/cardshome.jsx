import './cardshome.scss';
import rentals from '../../datas/rentals.json';
import {Link} from 'react-router-dom';

function CardsHome (){
    return (
        <div className="cardshome">
            {rentals.map((product) => {
                return (
                    <figure className="card">
                        <Link to={"/product/" + product.id}>
                            <img key={product.id} className = "card__img" src={product.cover} alt=""/>
                            <figcaption className ="card__title">{product.title}</figcaption>
                        </Link>
                    </figure>
                )
            })}
        </div>
    )
}

export default CardsHome;
