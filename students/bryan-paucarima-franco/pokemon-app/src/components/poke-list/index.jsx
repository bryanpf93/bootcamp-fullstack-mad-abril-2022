import { useEffect, useState } from "react";
import PokeCard from "../poke-card";
import Nav from "../nav";
import './styles.css'
import { useNavigate } from "react-router-dom";
import Header from "../header";
import InfiniteScroll from 'react-infinite-scroll-component';

function PokeList() {

    const [pokeList, setPokeList] = useState([])
    const [pokeListFiltered, setPokeListFiltered] = useState([])
    const [lastName, setLastName] = useState('')
    const [lastTypes, setLastTypes] = useState('All')
    const [page, setPage] = useState(-1)
    const [total, setTotal] = useState(0)
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        // fetch('https://pokeapi.co/api/v2/pokemon')
        // .then(res => res.json())
        // .then(d => 
        //     d.results.map(p => 
        //         fetch(p.url)
        //         .then(res => res.json())
        //         .then(d => {
        //             setPokeList(pokemon => [...pokemon, d])
        //             setPokeListFiltered(pokemon => [...pokemon,d])
        //         })
        //     )
        // )
        const currentPage = page + 1;
        setPage(currentPage);

        fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${20*currentPage}`)
            .then(res => res.json())
            .then(d => {
                setTotal(d.count);
                const promises = d.results.map(p => fetch(p.url).then(res => res.json()))
                Promise.allSettled(promises)
                    .then(results => {
                        const d = results.map(result => result.value);
                        setPokeList(pokemon => [...pokemon, ...d])
                        setPokeListFiltered(pokemon => [...pokemon, ...d])
                    })
                    .catch(error => console.error(error));
            })
    }

    const filterByName = e => {
        const val = e.target.value.toLowerCase() // valor del input
        filterPokemons(val, lastTypes); // filtro por el nombre actual y los types
        setLastName(val) // actualizo el nombre para que el resto de filtros lo tengan actualizados
        // const nameFiltered = pokeList.filter(c => c.name.toLowerCase().includes(val))
        // setPokeListFiltered(nameFiltered)
    }

    const filterByType = e => {
        filterPokemons(lastName, e.target.value); // filtro por los tipos actuales y el nombre guardado
        setLastTypes(e.target.value)
        // const typeFiltered = pokeList.filter(c => c.types.some(p => p.type.name === e.target.value))
        // setPokeListFiltered(typeFiltered)
    }

    const filterPokemons = (name, types) => {
        // filtro por nombre
        let filteredArray = pokeList.filter(c => c.name.toLowerCase().includes(name));
        // filtro por status
        filteredArray =
            types === 'All'
                ? filteredArray
                : filteredArray.filter(c => c.types.some(p => p.type.name === types))
        setPokeListFiltered(filteredArray)
    }

    const sortPokemons = () => {
        setPokeListFiltered(p => [...p.reverse()]);
    }

    return (
        <>
            <Header filterByName={filterByName} showFilter={true}></Header>
            <Nav filterByType={filterByType} sortPokemons={sortPokemons}></Nav>
            
            {/* <section className="all-cards">
                {pokeListFiltered.map(e => <PokeCard navigate={navigate} key={e.name} pokeCharacter={e}></PokeCard>)}
            </section> */}

            <InfiniteScroll
                dataLength={pokeListFiltered.length}
                next={fetchData}
                hasMore={total > 20 * page}
                loader={<h4>Loading...</h4>}
                className="all-cards">
                {pokeListFiltered.map((e) => (
                    <PokeCard navigate={navigate} key={e.name} pokeCharacter={e}></PokeCard>)
                )}
            </InfiniteScroll>
        </>
    )
}

export default PokeList;