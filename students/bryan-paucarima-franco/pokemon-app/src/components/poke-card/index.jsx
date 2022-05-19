import './styles.css'

function PokeCard ({pokeCharacter, navigate}) {


    return (
    
        <>
            <div className="card-container" onClick={() => navigate(`/pokemons/${pokeCharacter.name}`)}>
                <img className='img' alt='' src={pokeCharacter.sprites.front_default}></img>
                <div className='text-card'>
                    <h3>{pokeCharacter.name}</h3>
                    {pokeCharacter.types.map(e => <p key={e.type.name}>{e.type.name}</p>)}
                    <p>{pokeCharacter.id}</p>
                </div>
                
            </div>
        </>

    )
}

export default PokeCard;