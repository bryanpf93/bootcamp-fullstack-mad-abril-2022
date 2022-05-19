import './styles.css';

function Nav({filterByType, sortPokemons}) {
    return (
        <>

            <div className='buttons' onChange={filterByType}>
                    <input className="type-input" id="poison" type="radio" name="demo" value='poison' hidden />
                    <label className="type" htmlFor="poison">POISON</label>
                    <input className="type-input" id="fire" type="radio" name="demo" value='fire' hidden />
                    <label className="type" htmlFor="fire">FIRE</label>
                    <input className="type-input" id="water" type="radio" name="demo" value='water' hidden />
                    <label className="type" htmlFor="water">WATER</label>
                    <input className="type-input" id="all" type="radio" name="demo" value='All' hidden />
                    <label className="type" htmlFor="all">ALL</label>
            </div>

            <select name='select' onChange={sortPokemons}>
                <option value='menor' defaultValue>Menor a mayor</option>
                <option value='mayor' >Mayor a Menor</option>
            </select>

        </>
    )
}

export default Nav;