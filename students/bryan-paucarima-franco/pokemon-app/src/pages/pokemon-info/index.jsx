import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import './styles.css'

function PokemonInfo () {

    const {name} = useParams();
    const [pokemonInfo, setPokemonInfo] = useState({})

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => res.json())
        .then(p => setPokemonInfo(p))
    },[name])

    console.log(pokemonInfo)

    return (
        <>
            <Header></Header>
            <div className="info-container">
                <img className="img-info" src={pokemonInfo.sprites?.other['official-artwork'].front_default} alt="" />
                <div className="stats-info">
                    <h3>{pokemonInfo?.name?.toUpperCase()}</h3>
                    {pokemonInfo?.stats?.map(p => <h5 key={p.stat.url}>{p.stat.name.toUpperCase()}:{'    '}{p.base_stat}</h5>)}
                </div>
            </div>
        </>
    )
}

export default PokemonInfo;