import rentals from '../../datas/rentals.json';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Collapse from '../../components/Collapse/collapse';
import Slider from '../../components/Slider/slider';
import Host from '../../components/Host/host';
import Rating from '../../components/Rating/rating';
import './card.scss';

function Card() {
    const { id } = useParams();
    const rental = rentals.find((rental) => rental.id === id)

    if(!rental){
        return <Navigate to="*"/>
    }
    
    const rentalsEquipments = rental.equipments.map((equipment, index) => {
        return <ul key={index}>{equipment}</ul>
    })

    const rentalsTags = rental.tags.map((tag, index) => {
        return <div className="rental__inf__tags__div" key={index}>{tag}</div>
    })
    return (
        <main>
            <div className="rental">
                <div className = "rental__img"><Slider pictures={rental.pictures} /></div>
                <div className = "rental__display">
                    <div className = "rental__inf">
                        <div className="rental__inf__title">{rental.title}</div>
                        <div className="rental__inf__location">{rental.location}</div>
                        <div className="rental__inf__tags">{rentalsTags}</div>
                        <Host host={rental.host} />
                        <Rating rating={rental.rating} />
                    </div>
                    <div className = "rental__collapse">
                        <Collapse title="Description" text={rental.description} />
                        <Collapse title="Equipements" text={rentalsEquipments} />
                    </div>
                </div>
            </div>
        </main>
    )
  };
  
  export default Card;