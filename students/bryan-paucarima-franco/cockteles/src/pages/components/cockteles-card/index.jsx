import { Link } from 'react-router-dom';
import './styles.css'

function CocktelesCard({ cockteles }) {

    return (
        <>

            <div className='card-container'>
                <Link to={`/info/${cockteles.strDrink}`}>
                    <img className='img-card' src={cockteles.strDrinkThumb} alt="" />
                    <h4 className='text'>{cockteles.strDrink}</h4>
                </Link>

            </div>
        </>
    )
}

export default CocktelesCard;
