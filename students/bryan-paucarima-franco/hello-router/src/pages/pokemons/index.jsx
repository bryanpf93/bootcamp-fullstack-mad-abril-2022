import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Pokemons () {

    const [pokemons, setPokemons] = useState([])
    const navigate = useNavigate();

    useEffect (() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(d => {
            d.results.forEach(p => {
                fetch(p.url)
                .then(res => res.json())
                .then(pokemon => setPokemons(prevPoks => [...prevPoks, pokemon]))
            })
        });
    }, [])
    return (
        <main>
            <ul>
               {pokemons.map(p => <li key={p.id} onClick={() => navigate(`/pokemons/${p.name}`)} >
                                    <img src={p.sprites.front_default} alt="" />
                                    <h2>{p.name}</h2>
                                    </li>)} 
            </ul>
        </main>

    )
}

export default Pokemons