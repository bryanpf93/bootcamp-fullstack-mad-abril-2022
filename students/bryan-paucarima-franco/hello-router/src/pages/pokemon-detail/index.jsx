import { useParams } from "react-router-dom"
import { useState,useEffect } from 'react'

function PokemonDetail (){
    const {name} = useParams();
    const [pokemon,setPokemon] = useState({})
    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => res.json())
        .then(p => setPokemon(p))
    }, [name])
    
    return (
        <>
        
        <main>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.front_shiny} alt=''></img>
            <img src={pokemon.sprites?.other['official-artwork'].front_default} alt="" ></img>
            {pokemon.moves?.map(m => <p key={m.move.name}>{m.move.name}</p>)}

        </main>
        </>
    )
}

export default PokemonDetail