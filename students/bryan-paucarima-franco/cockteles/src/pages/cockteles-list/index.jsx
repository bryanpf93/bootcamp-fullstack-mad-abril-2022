import './styles.css'
import CocktelesCard from '../components/cockteles-card';
import { useCockteles } from '../../data/cockteles/cockteles.hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function CocktelesList() {

   const [cocktelList] = useCockteles()
   const [inputValue, setInputValue] = useState('')
   const navigate = useNavigate()


   const handleName = e => {
       let value = e.target.value.toLowerCase()
       setInputValue(value)
   }

   const handleProductInfo = e => {
        if(e.key === 'Enter')  navigate(`/info/${inputValue}`)
   }

    return (
        <>
        <input onKeyDown={handleProductInfo} onChange={handleName} type='text' placeholder='Search Coctails....' ></input>
        <section className='list-container'>
            {cocktelList?.map(c => <CocktelesCard key={c.idDrink} cockteles={c}></CocktelesCard>)}
        </section>
        </>
    )
}

export default CocktelesList;