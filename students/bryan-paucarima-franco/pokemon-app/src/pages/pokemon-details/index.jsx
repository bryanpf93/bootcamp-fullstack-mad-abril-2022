import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Header from "../../components/header";
import './styles.css'

function PokemonDetails() {

    const { name } = useParams();
    const [pokemon, setPokemon] = useState({});

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        setLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => res.json())
            .then(p => {
                setPokemon(p);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                setError(true);
            })
    }, [name])

    return (
        <>
            <Header></Header>
            {loading && <p>Loading....</p>}

            {error && <p>Error al cargar pokemon, no existe.</p>}
            {!error && <div className="img-container">
                <Link to={`/pokemons/${pokemon.name}/info`}>
                    <img className="img-pokemon" src={pokemon.sprites?.other['official-artwork'].front_default} alt="" width={200} height={200} />
                </Link>
            </div>}
        </>
    )

}

export default PokemonDetails