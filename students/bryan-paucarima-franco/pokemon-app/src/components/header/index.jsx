// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

function Header({ filterByName, showFilter }) {

    // const {name} = useParams();
    // const [pokemon,setPokemon] = useState({});

    // useEffect(()=> {
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    //     .then(res => res.json())
    //     .then(p => setPokemon(p))
    // }, [name])

    return (
        <header>
            <Link  className='logo' to={'/'}>
                <h1>PoKedeX</h1>
            </Link>

            <div className='input-suscribe'>
                {showFilter && <input className='input-search' type='text' onChange={filterByName} placeholder="Search" />}
                <Link className='logo
                ' to={'/contact'}>
                    <h3 className='suscribe'>SUBSCRIBE</h3>
                </Link>
            </div>

        </header>
    )


}

export default Header;